import { createApp, provide, h } from 'vue'
import * as Realm from "realm-web"
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'

import './assets/styles/main.scss'

// Environment variables
const dbURI = import.meta.env.VITE_REALM_URI
const dbID = import.meta.env.VITE_REALM_ID

const cache = new InMemoryCache()
const appRealm = new Realm.App({ id: dbID })

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: dbURI,
  fetch: async (uri, options) => {
    const accessToken = await getValidAccessToken()
    options.headers.Authorization = `Bearer ${accessToken}`
    return fetch(uri, options)
  }
})

async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!appRealm.currentUser) {
    await appRealm.logIn(Realm.Credentials.anonymous());
  } else {
    await appRealm.currentUser.refreshCustomData();
  }
  return appRealm.currentUser.accessToken
}

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app')
