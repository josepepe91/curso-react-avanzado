import React from 'react';
import {Button, Img, ImgWrapper} from './styles';
import {GoHeart} from 'react-icons/go';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) =>
  (
    <article>
      <a href={`detail/${id}`}>
        <ImgWrapper>
          <Img src={src}/>
        </ImgWrapper>
      </a>
      <Button>
        <GoHeart size='32px'/> {likes} likes!
      </Button>
    </article>
  )

