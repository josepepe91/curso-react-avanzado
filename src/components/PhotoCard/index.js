import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Button, Img, ImgWrapper} from './styles';
import {GoHeart} from 'react-icons/go';
import {Article} from '../ListOfCategories/styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // console.log(element)
    const observer = new window.IntersectionObserver((entries) => {
      const {isIntersecting} = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])
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
          <Button>
            <GoHeart size="32px"/> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}

