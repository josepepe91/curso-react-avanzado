import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import Context from './Context'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: 'https://petgram-server-jalbarado91-ebioch5dg-josepepe91.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  console.log('authLink token ', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError?.result?.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
  }
})

const client = new ApolloClient({
  link: authLink.concat(from([errorLink, httpLink])),
  cache: new InMemoryCache()
})
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
