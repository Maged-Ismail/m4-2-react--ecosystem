import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {items, sellers} from '../data';
import Header from './Header';



const StyledDiv = styled.div `
max-height: 100vh;
max-width: 100vw;
display:flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items:center;
font-family: 'Montserrat', sans-serif;
text-align:color-interpolation-filters;

.item {
  max-width: 20%;
  border-radius: 15px;
  margin: 35px;

}
.seller {
    max-width: 15%;
    border-radius: 50px;
    margin: 35px;
}

button {
    width:100px;
    height: 50px;
    border-radius:15px;
    background-color:yellow;
    color: white;
    font-size: 1em;
    font-weight: bold;
    justify-content:center;
    align-items:center;
}
`
function ItemDetails() {
  const {itemId} = useParams();
  const item = items[itemId];
  console.log(item);
  const seller = item.sellerId;
  // console.log(props)
  
  return(
    <>
    <Header/>
    <StyledDiv>
    <img className="item" src={item.imageSrc} alt="pic"/>
    <div>
      <h2>{item.name}</h2>
      <h3>{item.latinName}</h3>
    </div>
    <div>
      <p>{item.description}</p>
      <p>Product of : {item.countryOfOrigin}</p>
      <button>{ item.quantity > 0? 'Buy Now' : 'Out of Stock'}</button>
    </div>
    <div>
      <img className='seller' src={sellers[seller].avatarSrc} alt="pic"/>
      <p>Sold by: {sellers[seller].storeName}</p>
    </div>
    </StyledDiv>
    </>
  )
}

export default ItemDetails;