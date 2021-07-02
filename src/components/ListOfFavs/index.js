import React from 'react'
import { Grid, Image, Link } from './styles'
import { useGetFavs } from '../../hooks/useGetFavs'
import { PropTypes } from 'prop-types'

export const ListOfFavs = () => {
  const { data, loading, error } = useGetFavs()
  if (error) {
    console.log('error', error)
    console.log('data', data)
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>loading...</h2>
  }
  console.log('data', data)
  return (
    <Grid>
      {data?.favs?.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      ))}
    </Grid>
  )
}
