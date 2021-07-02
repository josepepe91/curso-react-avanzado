import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import React from 'react'
import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => {
  return (
    <Layout
      title='Petgram - Tu app de fotos de mascotas'
      subtitle='Con petgram podrás encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
