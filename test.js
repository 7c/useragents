var { randomUseragent,UseragentByFamily,UseragentBrowserFamilies } = require('./index')


console.log(`Random useragent by popularity:`,randomUseragent(true))
console.log(`Random useragent by randomity:`,randomUseragent(false))

console.log(`Browser Families:\n`,UseragentBrowserFamilies())

console.log(`Random Chrome UserAgent on Mac OS:`,UseragentByFamily('chrome','Mac OS X'))