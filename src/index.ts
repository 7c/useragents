//#region imports
import { readFileSync } from 'fs'
import { join } from 'path'
import type { UserAgent, UseragentsData } from './types'
//#endregion

// Loaded from the sibling data/ folder at runtime (kept out of src so it stays
// outside rootDir). Resolved relative to the compiled file: dist/ -> ../data.
const dataPath = join(__dirname, '..', 'data', 'useragents.json')
const useragents: UseragentsData = JSON.parse(readFileSync(dataPath, 'utf8'))

function UseragentBrowserFamilies(): string[] {
    const ret: string[] = []
    for (const i in useragents.useragents) {
        const agent = useragents.useragents[i]
        if (!ret.includes(agent.agent.family)) ret.push(agent.agent.family)
    }
    return ret
}

function UseragentByFamily(browserFamily: string | false, osFamily: string | false = false): UserAgent | false | null {
    let amount = 0
    if (!browserFamily) return false

    for (const i in useragents.useragents)
        amount += (useragents.useragents[i].agent.family.toLowerCase() === browserFamily.toLowerCase() && (osFamily === false || useragents.useragents[i].agent.os.family.toLowerCase() === osFamily.toLowerCase())) ? 1 : 0
    if (amount === 0) return null
    let r = amount
    while (r == amount)
    r = parseInt((Math.random() * amount).toFixed(0))
    let id = 0
    for (const i in useragents.useragents) {
        const agent = useragents.useragents[i]
        if (agent.agent.family.toLowerCase() === browserFamily.toLowerCase()
            && (osFamily === false || agent.agent.os.family.toLowerCase() === osFamily.toLowerCase())) {

            // console.log(id,r)
            if (id == r) {
                agent.ua = i; return agent;
            }
            id++
        }
    }
    return null
}

function randomUseragent(byPopularity: boolean = true): UserAgent | false {
    // Randomly
    if (!byPopularity) {
        const keys = Object.keys(useragents.useragents)
        const r = Number((Math.random() * keys.length).toFixed(0))
        const ky = keys[r]
        const ua = useragents.useragents[ky]
        ua.ua = ky
        return ua
    }

    // byPopularity
    const rnd = Math.random() * useragents.totalPopularity
    let total = 0
    for (const i in useragents.useragents) {
        const agent = useragents.useragents[i]
        if (rnd > total && rnd <= total + agent.popularity) {
            agent.ua = i
            return agent
        }
        total += agent.popularity
    }


    return false
}

export {
    useragents,
    randomUseragent,
    UseragentByFamily,
    UseragentBrowserFamilies
}

export type {
    UserAgent,
    UserAgentInfo,
    UserAgentEntity,
    UseragentsData
} from './types'
