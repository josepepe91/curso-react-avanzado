import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import React from 'react'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout title='Fotografía'>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
