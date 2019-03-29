import styled from '@emotion/styled';
import { css } from '@emotion/core';  
import {Link} from 'react-router-dom';




export const StyledLink = styled(Link)`
    font-family: 'Raleway', sans-serif;
    font-weight : 'regular'; 
    text-align : center;
    border-radius: 8px;
    text-decoration: none;
    display : inline-block;
    background: blue;
    background: linear-gradient(#ffba5a, #ff7657);
    padding: 14px 25px;
    color: white;
`;




export const List = styled.ul`
        list-style-type: none;
        display:flex;
       flex-wrap: wrap;
       align-content: space-between;
       
`;
