import React from 'react'
import styled from 'styled-components';

const Button = (props) => {
  return (
    <Container {...props}>
        {props.children}
    </Container>
  )
}

export default Button;

const Container = styled.div `
    display : flex;
    align-items : center;
    justify-content : center;
    width : ${(props) => (props.width)};
    height : ${(props)=> (props.height)};
    background: ${(props)=>(props.bgColor)};
    font-size : ${(props)=> (props.fontSize)};
    text-transform : uppercase;
    font-weight : bold;
    letter-spacing : 1.5px;
    border: 1px solid ${(props) => props.borderColor};
    border-radius: 5px;
    transition: all 0.35s ease-in-out;
    cursor : pointer;
    &:hover{
        background : ${(props)=> (props.hoverColor)}
        
    }
`