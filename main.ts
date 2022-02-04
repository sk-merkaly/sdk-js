import { Module } from '@nuxt/types'
import SDK from './src/.sdk'

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    merkaly: SDK
  }
}

interface SDKModuleParams {
  client: string
  domain?: string
  sdk?: () => SDK
}

const MerkalySDKModule: Module = function (params: SDKModuleParams) {
  const { options } = this

  options.auth = {
    ...options.auth,
    strategies: {
      auth0: {
        domain: params.domain,
        clientId: params.client
      }
    }
  }

  options.plugins.push({ src: '@/plugins/sdk' })
}

export default MerkalySDKModule
