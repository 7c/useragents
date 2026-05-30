//#region imports
import { randomUseragent, UseragentByFamily, UseragentBrowserFamilies } from './index'
//#endregion

function main(): void {
    console.log(`Random useragent by popularity:`, randomUseragent(true))
    console.log(`Random useragent by randomity:`, randomUseragent(false))

    console.log(`Browser Families:\n`, UseragentBrowserFamilies())

    console.log(`Random Chrome UserAgent on Mac OS:`, UseragentByFamily('chrome', 'Mac OS X'))
}

export { main }

main()
