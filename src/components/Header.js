import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.div `
  margin:0;
  padding:0;
  font-family: 'Montserrat', sans-serif;
height : 100px; 
display: flex;
align-items: center;
justify-content: space-between;
/* position: fixed; */
width: 100%;
z-index: 1;
border-bottom: 2px solid lightgray;
* {
    font-family: 'Montserrat', sans-serif;
}
.pin{
  max-height:60px;
}
.logo {
font-size: 40px;
margin:20px;
justify-content:flex-start
}
ul {
  list-style:none;
  display:flex;
  justify-content:flex-end;
  font-size:25px;
  margin: 27.5px;
  text-align: right;
}
li {
display:flex;
justify-content:flex-end;
text-decoration: none;
text-align: right;
color: black;
margin-right:35px;
margin: 0 var(--nav-margin);
padding: 20px;
font-family: 'Poppins', sans-serif;
transition: opacity 0.2s ease-in-out; 
font-family: 'Montserrat', sans-serif;
Link {
  text-decoration: none;
  text-align: right; 
}
}
`

function Header(props) {
  return (
    <StyledHeader>
        <img className="pin" src='../assets/pin.png' alt="logo" />
        <div className="logo">Fruit Emporium</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
  </StyledHeader>
  )
}

export default Header;