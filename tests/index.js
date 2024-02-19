const ForwardEmailNet = require("../dist");

function test() {
  let apiKey = 'YOUR_API_KEY'
  let domainName = 'DOMAIN_NAME'
  const fwd = new ForwardEmailNet.default(apiKey)
  fwd.listDomainAliases(domainName).then((r) => {
    r.json().then((rs) => {
      console.log('response :: ', rs)
    })
  })
}

test()
