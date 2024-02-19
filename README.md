# Forwardemail api

Unofficial forwardemail.net (https://forwardemail.net) nodejs library.

## Install
`npm install forwardemail-api`

## Usage & example

```js
const ForwardEmailNet = require('forwardemail-api')

let apiKey = 'YOUR_API_KEY'
let domainName = 'DOMAIN_NAME'

const fwd = new ForwardEmailNet.default(apiKey)
fwd.listDomainAliases(domainName).then((r) => {
  r.json().then((rs) => {
    console.log('response :: ', rs)
  })
})
```
