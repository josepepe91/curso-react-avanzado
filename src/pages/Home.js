import {ListOfCategories} from '../components/ListOfCategories';
import {ListOfPhotoCards} from '../components/ListOfPhotoCards';
import React, {Fragment} from 'react';

export const Home = ({id}) => {
  return (
    <Fragment>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id}/>
    </Fragment>
  )
}
