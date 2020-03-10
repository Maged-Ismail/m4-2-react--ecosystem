import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledSection = styled.section`
margin-top: 30px;
max-width: 100vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

div {
  max-width: 28%;
  /* display: inline-block; */
  border-radius: 15px;
  box-shadow: -1px 1px 5px 1px rgba(0,0,0,0.75);
  text-align:center;
  margin:15px;
}
img {
  width : 85%; 
  margin-top:20px;
  border-radius: 15px;
  justify-content: center;
  align-items:center;
}
h3 h4 {
  text-align:center;
}
`
const ListingGrid = (props) => {
  let itemList = Object.values(props);
      itemList =Object.values(itemList[0]);
      // console.log(itemList);
  return (
    <StyledSection>
      {
        itemList.map((item) =>{
          // console.log(item);
          
        const image= item.imageSrc;
        const name = item.name;
        const latin = item.latinName;
        return (
          <div>
          <Link to={`/items/${item.id}`}><img src={image} alt="pic"/> </Link>
          <h3>{name}</h3>
          <h4>{latin}</h4>
          </div>
        )
      })
        }
    </StyledSection>
  );
}
ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;