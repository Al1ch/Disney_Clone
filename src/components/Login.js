import React from 'react'
import styled from 'styled-components';
import Button from './Buttons/Button';

const Login = (props) => {
  return (
    <Container>
        <Content>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
            <Button width= "500px" bgColor="#075ee6" height= "60px" fontSize= "20px" borderColor="royalblue" hoverColor="blue"> Get All There </Button>
            <Description>
                Get Premier Access to Thor Love and Thunder for an additional fee with a Disney+ subscription. As of 
                28/08/22, the price of Disney+ and Disney Bundle will increase by $1.
            </Description>
            <LogoImage src="/images/cta-logo-two.png"/>
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
const Description = styled.p `
    font-size : 17px;
    letter-spacing : 1.25px;
    line-height : 1.5;
    font-weight: 530; 
`

const LogoImage = styled.img `
    max-width : 600px;
    display : inline-block;
    vertical-align :bottom;
    width : 100%;
`

export default Login;