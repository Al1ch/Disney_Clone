import React from 'react'
import styled from 'styled-components';

const Button = ({children , width , height , bgColor , fontSize}) => {
  return (
    <Container width= {width} height= {height} bgColor={bgColor} fontSize = {fontSize}>
        {children}
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

`