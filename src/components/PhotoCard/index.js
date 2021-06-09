import React, {Fragment} from 'react';
import {Button, Img, ImgWrapper} from './styles';
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md';
import {Article} from '../ListOfCategories/styles';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen} from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder
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
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px"/> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}

