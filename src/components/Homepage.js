import React from 'react';


import {items} from '../data';
import Header from './Header';
import ListingGrid from './ListingGrid';



function Homepage(props) {
  return (
    <>
    <Header/>
    <h1>Fruit emporium sells the finest fruits from this world and beyond.</h1>
    <h2>Browse items:</h2>
    <ListingGrid props={items}/>
    </>
  )
}

export default Homepage;