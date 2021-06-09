import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Button, Img, ImgWrapper} from './styles';
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md';
import {Article} from '../ListOfCategories/styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const key = `like-${id}`
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(() => {
    try {
      return window.localStorage.getItem(key)
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    // Se verifica que el objeto window contenga el feature IntersectionObserver, si no lo tiene lo carga del polyfill
    // y lo devuelve en la promesa. En el caso de chrome no lo necesita, pero en el caso de Edge, si.
    Promise.resolve(
      typeof window.IntersectionObserver != 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const {isIntersecting} = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {
        show &&
        <Fragment>
          <a href={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src}/>
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px"/> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}

