import { BaseURI } from './constant'

class ForwardEmailNet {
  apiKey: string
  static basePath: string = BaseURI + '/v1'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  static getHeaders(apiKey: string) {
    return {
      Authorization: 'Basic ' + Buffer.from(`${apiKey}:`).toString('base64'),
    }
  }

  static listDomainAliases(
    args: {
      domainName: string
    },
    apiKey: string,
  ) {
    return fetch(this.basePath + `/domains/${args.domainName}/aliases`, {
      method: 'GET',
      headers: ForwardEmailNet.getHeaders(apiKey),
    })
  }

  static createDomainAlias(
    args: {
      domainName: string
      name?: string
      recipents?: Array<string>
      description?: string
      labels?: Array<string>
      hasRecipentVerification?: boolean
      isEnabled?: boolean
      hasImap?: boolean
      hasPgp?: boolean
      publicKey?: string
    },
    apiKey: string,
  ) {
    let body = JSON.stringify({
      name: args.name,
      recipents: args.recipents,
      description: args.description,
      labels: args.labels,
      has_recipent_verification: args.hasRecipentVerification,
      is_enabled: args.isEnabled,
      has_imap: args.hasImap,
      has_pgp: args.hasPgp,
      public_key: args.publicKey,
    })
    return fetch(this.basePath + `/domains/${args.domainName}/aliases`, {
      method: 'POST',
      headers: ForwardEmailNet.getHeaders(apiKey),
      body: body,
    })
  }

  static updateDomainAlias(
    args: {
      domainName: string
      aliasId: string
      name?: string
      recipents?: Array<string>
      description?: string
      labels?: Array<string>
      hasRecipentVerification?: boolean
      isEnabled?: boolean
      hasImap?: boolean
      hasPgp?: boolean
      publicKey?: string
    },
    apiKey: string,
  ) {
    let body = JSON.stringify({
      name: args.name,
      recipents: args.recipents,
      description: args.description,
      labels: args.labels,
      has_recipent_verification: args.hasRecipentVerification,
      is_enabled: args.isEnabled,
      has_imap: args.hasImap,
      has_pgp: args.hasPgp,
      public_key: args.publicKey,
    })
    return fetch(
      this.basePath + `/domains/${args.domainName}/aliases/${args.aliasId}`,
      {
        method: 'PUT',
        headers: ForwardEmailNet.getHeaders(apiKey),
        body: body,
      },
    )
  }

  static retrieveDomainAlias(
    args: {
      domainName: string
      aliasId: string
    },
    apiKey: string,
  ) {
    return fetch(
      this.basePath + `/domains/${args.domainName}/aliases/${args.aliasId}`,
      {
        method: 'GET',
        headers: ForwardEmailNet.getHeaders(apiKey),
      },
    )
  }

  createDomainAlias(
    domainName: string,
    name?: string,
    recipents?: Array<string>,
    description?: string,
    labels?: Array<string>,
    hasRecipentVerification?: boolean,
    isEnabled?: boolean,
    hasImap?: boolean,
    hasPgp?: boolean,
    publicKey?: string,
  ) {
    return ForwardEmailNet.createDomainAlias(
      {
        domainName: domainName,
        name: name,
        recipents: recipents,
        description: description,
        labels: labels,
        hasRecipentVerification: hasRecipentVerification,
        isEnabled: isEnabled,
        hasImap: hasImap,
        hasPgp: hasPgp,
        publicKey: publicKey,
      },
      this.apiKey,
    )
  }

  updateDomainAlias(
    domainName: string,
    aliasId: string,
    name?: string,
    recipents?: Array<string>,
    description?: string,
    labels?: Array<string>,
    hasRecipentVerification?: boolean,
    isEnabled?: boolean,
    hasImap?: boolean,
    hasPgp?: boolean,
    publicKey?: string,
  ) {
    return ForwardEmailNet.updateDomainAlias(
      {
        domainName: domainName,
        aliasId: aliasId,
        name: name,
        recipents: recipents,
        description: description,
        labels: labels,
        hasRecipentVerification: hasRecipentVerification,
        isEnabled: isEnabled,
        hasImap: hasImap,
        hasPgp: hasPgp,
        publicKey: publicKey,
      },
      this.apiKey,
    )
  }

  listDomainAliases(domainName: string) {
    return ForwardEmailNet.listDomainAliases(
      {
        domainName: domainName,
      },
      this.apiKey,
    )
  }

  retrieveDomainAlias(domainName: string, aliasId: string) {
    return ForwardEmailNet.retrieveDomainAlias(
      {
        domainName: domainName,
        aliasId: aliasId,
      },
      this.apiKey,
    )
  }
}

export default ForwardEmailNet
