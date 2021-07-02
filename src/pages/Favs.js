import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus favoritos'>
      <ListOfFavs />
    </Layout>
  )
}
