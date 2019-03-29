import styled from '@emotion/styled';
import { css } from '@emotion/core';  
import {Link} from 'react-router-dom';





export const Section = styled.section`

    background-color: #141414;
     ${props => props.color && css`
        color: ${props.color};
    `}

`;




export const Title = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight : 'regular'; 
    font-size : 3rem;
    text-align : center;
    color: #ffba5a;
    ${props => props.color && css`
        color: ${props.color};
    `}
`;

export const Para = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight : 'regular'; 
    text-align : center;
    margin : 8px 8px;
    padding : 8px 8px;
    color : #3c415e;
    ${props => props.color && css`
        color: ${props.color};
    `}
`;


export const CheckboxLabel = styled.label`
     ${props => props.color && css`
        color: ${props.color};
    `}

`;

export const Checkbox = styled.input`
    display:flex;
    justify-content: center;
    align-content:center;
    align-items:center;
    width : 400px;
    height: 32px;
    border-radius : 8px;
    border-width: 2px;
    border-color : #34699a;
    ${props => props.color && css`
        color: ${props.color};
    `}

`;



export const CheckboxContainer = styled.div`
    display : flex;
    justify-content : center;
    align-content: space-between;
     ${props => props.reversed && css`
        flex-direction : row-reverse;
    `}

`;


export const StyledLink = styled(Link)`
    font-family: 'Raleway', sans-serif;
    font-weight : 'regular'; 
    text-align : center;
    border-radius: 8px;
    text-decoration: none;
    display : flex;
    background: linear-gradient(#ffba5a, #ff7657);
    padding: 14px 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: white;
    :hover {
        border-color: #fcf9ed;
        color: #ff7657;
    }
`;





export const Image = styled.img`
        border-radius: 5px 5px 0 0;
        width: 250px;
        height : 300px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;



export const List = styled.ul`
        list-style-type: none;
        display:flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: center;

       
`;



export const Card = styled.li`
        list-style-type: none;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;     
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 40%;
        justify-content:center;
        border-radius: 5px;
        margin: 24px 24px;
        padding: 24px 24px;
        :hover {
             box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);}
    
`;


export const CardContainer = styled.div`
        list-style-type: none;
        display:flex;
        flex-wrap: wrap;
        align-content: space-between;
        padding: 2px 16px;
        margin: 2px 16px;

       
`;




export const Button = styled.button`
    display:flex;
    justify-content: center;
    border-radius: 8px;
    border : none;
    padding: 14px 25px;
    background: linear-gradient(#113f67, #34699a);
    cursor: pointer;
    color: white;
    text-align: center;
    font-size: 1em;
    margin: 1em;
    :hover {
        color: #fccb8f;
    }
`;
