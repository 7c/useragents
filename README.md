# UserAgents
This library contains `useragents.json` and small JS library to pick random useragents by pure randomity or by UA Popularity.

# Installation
```
npm --save i useragentsdata 
```

# Use Data in your own app
this is raw access to useragents, so you can process it with your own functions
```
var { useragents } = require('useragentsdata')
console.log(useragents)
```
# Taking random Useragent
returns an agent object
```
var { randomUseragent } = require('useragentsdata')
console.log(`Random useragent by popularity:`,randomUseragent(true))
console.log(`Random useragent by randomity:`,randomUseragent(false))
```

# Taking Useragent by BrowserFamily or/and OsFamily
the osFamily is optional
```
var { UseragentByFamily } = require('useragentsdata')
console.log(`Random Chrome UserAgent on a Mac OS:`,UseragentByFamily('chrome','Mac OS X'))
```


# BrowserFamilies
```
var { UseragentBrowserFamilies } = require('useragentsdata')
console.log(`Browser Families:\n`,UseragentBrowserFamilies())
```

returns
```
 [ 'Chrome',
  'Firefox',
  'QQ Browser',
  'Other',
  'Yandex Browser',
  'Coc Coc',
  'Iron',
  'Firefox Mobile',
  'Opera',
  'Mobile Safari',
  'UC Browser',
  'Chromium',
  'Vivaldi',
  'Chrome Mobile',
  'Dragon',
  'Android',
  'Mobile Safari UI/WKWebView',
  'Edge',
  'Safari',
  'IE',
  'Baiduspider',
  'Nokia OSS Browser',
  'Mail.ru Chromium Browser',
  'Chrome Mobile WebView',
  'Chrome Mobile iOS' ]
```


# Why ?
Sometimes one might need up2date and real Useragents for different projects and need to spoof Useragent. This library is designed for that purphose. I will try to update this library frequently. The `useragents.json` is the value of this repository since this data will be kept recent. Imagine Mozilla releases new version, you would need to update all your libraries too with most recent version just to look legitime

# Background
These useragents are from real webvisitors and are anonimized. A typical UA data looks like:

```
{
      "popularity": 53,
      "agent": {
        "family": "Chrome",
        "major": "69",
        "minor": "0",
        "patch": "3497",
        "device": {
          "family": "Other",
          "major": "0",
          "minor": "0",
          "patch": "0"
        },
        "os": {
          "family": "Windows",
          "major": "8",
          "minor": "0",
          "patch": "0"
        }
      },
      "popularityRate": 0.0007017353385310296
    }
```

The agent,os,device properties are prepared by using https://github.com/3rd-Eden/useragent library. `popularity` is the number of times we have seen this UA. In this example this UA was seen 53 times among whole logging-period and the `popularityRate` is the % amount from all other UserAgents

This data might grow during the time but mathematically this data should be equal to browser market share because it is taken from sites with a lot of traffic.