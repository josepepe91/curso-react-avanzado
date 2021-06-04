import React, {Fragment, useEffect, useState} from 'react';
import {Category} from '../Category';
import {Item, List} from './styles';

const useCategoryData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // con la dependencia [], el efecto solo se ejecutará una vez, sino queda en loop
  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-jalbarado91-ebioch5dg-josepepe91.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
          setCategories(response)
          setLoading(false)
        }
      )
  }, [])

  return {categories, loading}
}

export const ListOfCategories = () => {
  const {categories, loading} = useCategoryData()
  // hooks
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    // Esto nos asegura que el listner no permanezca en ejecución y no se cree un nuevo listener cada que se renderice
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ?
          <Item key="loading">
            <Category/>
          </Item>
          :
          categories.map(category =>
            <Item key={category.id}>
              <Category {...category}/>
            </Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
