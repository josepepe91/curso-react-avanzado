import React, {Fragment} from 'react'
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyle} from './styles/GlobalStyles';
import {Logo} from './components/Logo';
import {ListOfPhotoCards} from './components/ListOfPhotoCards';
import {PhotoCardWithQuery} from './containers/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (<div>
    {/*GlobalStyle se agrega para que se apliquen los estilos globales*/}
    <GlobalStyle/>
    <Logo/>
    {
      detailId
        ?
        <PhotoCardWithQuery id={detailId}/>
        :
        <Fragment>
          <ListOfCategories/>
          <ListOfPhotoCards categoryId={1}/>
        </Fragment>
    }
  </div>)
}
