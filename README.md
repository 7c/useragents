# UserAgents
This library contains `useragents.json` and small JS library to pick random useragents by pure randomity or by UA Popularity.

# Installation
```
npm i --save useragentsdata
```

The package ships with TypeScript type definitions, so no extra `@types` package is needed.

# Use Data in your own app
this is raw access to useragents, so you can process it with your own functions
```ts
import { useragents, UseragentsData } from 'useragentsdata'

const data: UseragentsData = useragents
// data.useragents is a Record<string, UserAgent> keyed by the raw UA string
console.log(data.useragents)
```

# picking a random Useragent
returns an agent object (or `false` if none could be picked)
```ts
import { randomUseragent, UserAgent } from 'useragentsdata'

const byPopularity: UserAgent | false = randomUseragent(true)
const byRandomity: UserAgent | false = randomUseragent(false)
console.log('Random useragent by popularity:', byPopularity)
console.log('Random useragent by randomity:', byRandomity)
```

# Taking Useragent by BrowserFamily or/and OsFamily
the osFamily is optional. Returns `false` if no browser family is given, or `null` if nothing matches
```ts
import { UseragentByFamily, UserAgent } from 'useragentsdata'

const agent: UserAgent | false | null = UseragentByFamily('chrome', 'Mac OS X')
console.log('Random Chrome UserAgent on a Mac OS:', agent)
```


# BrowserFamilies
```ts
import { UseragentBrowserFamilies } from 'useragentsdata'

const families: string[] = UseragentBrowserFamilies()
console.log('Browser Families:\n', families)
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
These useragents are from real webvisitors and are anonimized. A typical UA data looks like (a `UserAgent`):

```ts
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