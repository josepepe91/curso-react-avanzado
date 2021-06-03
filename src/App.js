import React from 'react'
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyle} from './GlobalStyles';
import {ListOfPhotoCards} from './components/ListOfPhotoCards';
import {Logo} from './components/Logo';

export const App = () => (
  <div>
    {/*GlobalStyle se agrega para que se apliquen los estilos globales*/}
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards/>
  </div>
)
