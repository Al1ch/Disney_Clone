import React from 'react'
import styled from 'styled-components';
import Button from './Buttons/Button';


const Login = (props) => {
  return (
    <Container>
        <Content>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
            <Button width= "500px" bgColor="#0171d2" height= "60px" fontSize= "20px"> Get All Three </Button>
        </CTA>

        <BgImage/>

        </Content>
    </Container>
  )
}

const Container = styled.section `
    overflow : hidden;
    display : flex;
    flex-direction : column;
    text-align : center;
    justify-content : center;
    height : 100vh;
`

const Content = styled.div `
 
    width : 100%;
    position : relative;
    min-height : 100vh;
    box-sizing : border-box;
    display : flex;
    justify-content: center;
    align-items : center;

`

const BgImage = styled.div `
    height: 100%;
    width: 100%;
    background-image : url("/images/login-background.jpg");
    background-size: cover;
    z-index : -1;
    position : absolute;
`

const CTA = styled.div `
    margin-bottom : 2vw;
    max-width: 650px;
    flex-wrap : wrap;
    display: flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
    width : 100%;
`

const CTALogoOne = styled.img`
    margin-bottom : 12px;
    max-width: 600px;
    min-height : 1px;
    display: block;
    width : 100%;

`

export default Login;