var useragents = require('./useragents.json')

function UseragentBrowserFamilies() {
    var ret = []
    for(var i in useragents.useragents) 
    {
        var agent = useragents.useragents[i]
        if (!ret.includes(agent.agent.family)) ret.push(agent.agent.family)
    }
    return ret
}

function UseragentByFamily(browserFamily,osFamily=false){
    var amount = 0
    if (!browserFamily) return false

    for(var i in useragents.useragents)
        amount+= (useragents.useragents[i].agent.family.toLowerCase()===browserFamily.toLowerCase() && (osFamily==false || useragents.useragents[i].agent.os.family.toLowerCase()===osFamily.toLowerCase())) ?1:0
    if (amount===0) return null
    var r = amount
    while(r==amount)
    r = parseInt((Math.random()*amount).toFixed(0))
    var id = 0
    console.log(`amount:${amount} r=${r}`)
    for(var i in useragents.useragents) 
    {
        var agent = useragents.useragents[i]
        if (agent.agent.family.toLowerCase()===browserFamily.toLowerCase() 
            && (osFamily==false || agent.agent.os.family.toLowerCase()===osFamily.toLowerCase())) {
            
            // console.log(id,r)
            if (id==r) { 
                console.log(`<<<<<<<<<<<<<`,agent)
                agent.ua = i; return agent; 
            }
            id++
        }
    }
    return null
}

function randomUseragent(byPopularity=true) {
    // Randomly
    if (!byPopularity) {
        var r = (Math.random()*Object.keys(useragents.useragents).length).toFixed(0)
        var ky = Object.keys(useragents.useragents)[r]
        var ua = useragents.useragents[ky]
        ua.ua = ky
        return ua
    }

    // byPopularity
    var rnd = Math.random()*useragents.totalPopularity
    var total = 0 
    for(var i in useragents.useragents) {
        var agent = useragents.useragents[i]
        if (rnd>total && rnd<=total+agent.popularity) {
            agent.ua = i
            return agent
        }
        total+=agent.popularity
    }
    
        
    return false
}

module.exports={
    useragents,
    randomUseragent,
    UseragentByFamily,
    UseragentBrowserFamilies
}