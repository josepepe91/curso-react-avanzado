import React, { useContext } from 'react'
import { Img, ImgWrapper } from './styles'
import { Article } from '../ListOfCategories/styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'
import { Link, useNavigate } from '@reach/router'
import { Context } from '../../Context'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutationToggle, mutationError } = useToggleLikeMutation({ id })
  const navigate = useNavigate()
  const { removeAuth } = useContext(Context)

  const handleFavClick = () => {
    mutationToggle().then((data) => {
      console.log('like-data', data)
    })
  }

  if (mutationError) {
    console.log('mutationError')
    removeAuth()
    navigate('/user')
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}
