import React from 'react'
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyle} from './GlobalStyles';
import {ListOfPhotoCards} from './components/ListOfPhotoCards';

export const App = () => (
  <div>
    {/*GlobalStyle se agrega para que se apliquen los estilos globales*/}
    <GlobalStyle/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
  </div>
)
