import React, {Fragment} from 'react';
import {Img, ImgWrapper} from './styles';
import {Article} from '../ListOfCategories/styles';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen} from '../../hooks/useNearScreen';
import {FavButton} from '../FavButton';
import {useToggleLikeMutation} from '../../hooks/useToggleLikeMutation';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const {mutationToggle, mutationError, mutationLoading} = useToggleLikeMutation({id})

  const handleFavClick = () => {
    !liked && mutationToggle()
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show &&
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src}/>
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
        </Fragment>
      }
    </Article>
  )
}

