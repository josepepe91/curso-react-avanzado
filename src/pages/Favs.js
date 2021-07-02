import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus favoritos'>
      <ListOfFavs />
    </Layout>
  )
}
