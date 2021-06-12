import React, { createContext, useState } from 'react'
import { useSessionStorage } from './hooks/useLocalStorage'

export const Context = createContext({ isAuth: false })
const TOKEN = 'token'

const Provider = ({ children }) => {
  const [token, setToken] = useSessionStorage(TOKEN, false)
  const [isAuth, setIsAuth] = useState(() => {
    return token
  })

  const value = {
    isAuth,
    activateAuth: (tokenValue) => {
      setIsAuth(true)
      setToken(tokenValue)
    }
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
