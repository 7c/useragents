# UserAgents
This library contains `useragents.json` and small JS library to pick random useragents by pure randomity or by UA Popularity.

# Installation
```
npm --save i useragentsdata 
```

# Use Data in your own app
```
var { useragents } = require('useragents')
console.log(useragents)
```
# Take random Useragent
```
var { randomUseragent } = require('useragents')
console.log(`Random useragent by popularity:`,randomUseragent(true))
console.log(`Random useragent by randomity:`,randomUseragent(false))
```


# Why ?
Sometimes one might need up2date and real Useragents for different projects and need to spoof Useragent. This library is designed for that purphose. I will try to update this library frequently. The `useragents.json` is the value of this repository since this data will be kept recent. Imagine Mozilla releases new version, you would need to update all your libraries too with most recent version just to look legitime

# Background
These useragents are from real webvisitors and are anonimized. A typical UA data looks like:

```
{ popularity: 40,
  agent:
   { family: 'Other',
     major: '0',
     minor: '0',
     patch: '0',
     device: Device { family: 'Other', major: '0', minor: '0', patch: '0' },
     os: OperatingSystem { family: 'Other', major: '0', minor: '0', patch: '0' } },
  os: { family: 'Other', major: '0', minor: '0', patch: '0' },
  device: { family: 'Other', major: '0', minor: '0', patch: '0' },
  popularityRate: 0.00006121783547966891 }
```

The agent,os,device properties are prepared by using https://github.com/3rd-Eden/useragent library. `popularity` is the number of times we have seen this UA. In this example this UA was seen 40 times among whole logging-period and the `popularityRate` is the % amount from all other UserAgents

This data might grow during the time but mathematically this data should be equal to browser market share because it is taken from sites with a lot of traffic.