import React from 'react';
import {PhotoCard} from '../PhotoCard';

export const ListOfPhotoCards = () => (
  <ul>
    {[1, 2, 3].map(photoCard => <PhotoCard key={photoCard}/>)}
  </ul>
)
