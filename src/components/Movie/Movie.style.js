import styled from '@emotion/styled';
import { css } from '@emotion/core';  

export const Title = styled.h2`
     font-family: 'Raleway', sans-serif;
    font-weight : 'regular'; 
    text-align : center;
    color: #ffba5a;
    font-size : 3rem;
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
    ${props => props.color && css`
        color: ${props.color};
    `}

`;


export const CheckboxContainer = styled.div`
    display : flex;
    justify-content : flex-start;
     ${props => props.reversed && css`
        flex-direction : row-reverse;
    `}

`;

export const List = styled.ul`
        list-style-type: none;
        display:flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: center;
        

       
`;

export const Image = styled.img`
        border-radius: 5px 5px 0 0;
        width: 250px;
        height : 300px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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