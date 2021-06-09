import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-server-jalbarado91-ebioch5dg-josepepe91.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('app'))
