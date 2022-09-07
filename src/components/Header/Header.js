import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons/Button'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import { auth, provider } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUsername, selectUserPhoto , setUserLoginDetails , setSignOutState  } from '../../features/user/userSlice';

const Header = () => {
 
  const dispatch = useDispatch;
  const history = useHistory; //acces
  const userName = useSelector(selectUsername);//Donne acces au username
  const userPhoto = useSelector(selectUserPhoto);//useSelector permet de chercher une donner dans le store

  const handleAuth = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      alert(error.message)
    });

  };

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name: user.displayName, //Displayname viens de ce que Google envoie quand tu te co a firebase
      email: user.email, //User viens de ce qu'envoie google
      photo : user.photoURL
    }))
  }

  return (
    <Nav>
        <Logo> <img src="/images/logo.svg"/></Logo>
        {
          !userName ?
          <Button onClick={handleAuth} width= "125px" height= "35px" bgColor="transparent" fontSize = "15px" hoverColor="#A9A9A9">Login </Button>
          :
          <>
          <NavMenu>
            <NavItem href="/home"><HomeIcon/> <span>Home</span></NavItem>
            <NavItem href="/home"><SearchIcon/> <span>Search</span></NavItem>
            <NavItem href="/home"><AddIcon/> <span>Watchlist</span></NavItem>
            <NavItem href="/home"><StarIcon/> <span>Originals</span></NavItem>
            <NavItem href="/home"><LocalMoviesIcon/> <span>Movies</span></NavItem>
            <NavItem href="/home"><TvIcon/> <span>Series</span></NavItem>
          </NavMenu>
          <UserImg src={userPhoto}> </UserImg>
          </>
        }
       
        
        

    </Nav>
  )
}

export default Header

const Nav = styled.nav `
    position : fixed;
    width: 100%;
    height : 70px;
    display : flex;
    justify-content : space-between;
    align-items :center;
    padding : 0 36px;
    background-color : #090b13;
`

const Logo = styled.a `
    cursor: pointer;
    background-repeat: no-repeat;
    max-height : 70px;
    display: inline-block;
     img{
        width: 80px;
        
     }

`

const NavMenu = styled.div `
  height: 100%;
  flex-flow: nowrap;
  display : flex;
  align-items : center;
  justify-content : flex-start;
  position : relative;
  width : 1000px;
  margin-left: 50px;
  @media (max-width: 768px){
    display:none;
  }
`

const NavItem = styled.a`
  display:flex;
  align-items: center;
  height: 100%;
  width : 70px;
  font-size : 7px;
  margin-right : 60px;
  justify-content: space-between;
  text-transform: uppercase;
  span {
    white-space: nowrap;
    font-size:13px;
    color : white;
    display: flex;
    align-items : center;
    position : relative;
    margin-left: 10px;
    &:before{

      height : 7px;
      background : white;
      visibility : hidden;
      border-radius : 0px 0px 7px 7px;
      transform : scaleX(0);
      transform-origin : left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width : auto;
      position : absolute;
      left:0;
      right : 0px;
      opacity : 0;
      content : "";
      bottom: -6px;
    }

    &:hover{
      span: before{
        visibility : visible;
        transform: scaleX(1);
        opacity : 1 !important;
      }

    }
  }




  span {
    
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;


    &:before{
      background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
    }
  } 
  &:hover {
    span: before{
      transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
  }
`


const UserImg = styled.img `
  heigt: 100%;

`