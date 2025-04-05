import React, {useState} from "react";
import { styled, connect } from "frontity";
import Link from "../linktrue";
import LangSwitcherMobile from './langSwitcherMobile';
import SocialMediaSuperiorMobile from './SocialMediaSuperiorMobile';

import {RxTriangleUp} from 'react-icons/rx'

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

    //line for submenu function
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenuRent, setShowSubMenuRent] = useState(false);
    const [showSubMenuLongTerm, setShowSubMenuLongTerm] = useState(false);
    

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
      
      {isThereLinks &&
          menu.map(({name, link, submenu}) => (
            <>
              {submenu.length === 0? 
              
              <MenuLink 
                key={name}
                link={link}
                aria-current={state.router.link === link ? "page" : undefined}
              >
                {name}
              </MenuLink>
              
              :

                  name === 'Tours'? 
                  <>
                  <CustomLink  onClick={() => {setShowSubMenu(!showSubMenu), setShowSubMenuRent(false), setShowSubMenuLongTerm(false)}} key={name}>
                    {name}

                    <SubMenuIcon showIcon = {showSubMenu} />
                                  
                  </CustomLink>


                  <SubMenu show={showSubMenu}>
              
                    {
                      submenu.map(({name, link}) => {
                        return(
                          <SubMenuItem key={name}>
                            <MenuLinkSubMenu  key={name} link={link} aria-current={state.router.link === link ? "page" : undefined}>
                              {name}
                            </MenuLinkSubMenu>
                          </SubMenuItem>
                        )
                      })
                    }
                  </SubMenu> 
                  </>
                  
                  : 
                  
                    
                  <>
                  <CustomLink  onClick={() => {setShowSubMenuRent(!showSubMenuRent), setShowSubMenu(false)}} key={name}>
                    {name}
               
                    <SubMenuIcon showIconRent = {showSubMenuRent} />
              
                  </CustomLink>

                  <SubMenu showRent={showSubMenuRent}>


                    {
                      submenu.map(({name, link}) => {
                        return(
                          <SubMenuItem key={name}>
                            <MenuLinkSubMenu  key={name} link={link} aria-current={state.router.link === link ? "page" : undefined}>
                              {name}
                            </MenuLinkSubMenu>
                          </SubMenuItem>
                        )
                      })
                    }
                  </SubMenu> 
                  </>

        

              }
            </>
          ))}
          <SocialMediaSuperiorMobile />
          <LangSwitcherMobile />
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #4e9968;//#1f38c5;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  display:flex;
  flex-direction: column;
  width: 100%;
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color:var(--white);
    display: block;
    position: relative;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color:var(--black);
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  /* &[aria-current="page"] {
    color: var(--black);
    font-weight: bold;
  } */

  text-decoration: none;
  border-top: 1px solid #fff;
`;

const CustomLink = styled.div`

  width: 100%;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color:var(--white);
    display: block;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color: var(--golden);
    /* background-color: #191919; */
    /* background-color: var(--main-color); */
    color:var(--black);
    background-color: rgba(0, 0, 0, 0.05);
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--golden);
    font-weight: bold;
  }
  
  border-top: 1px solid #fff;
`

const CustomLinkSecond = styled.div`

  width: 100%;
  outline: 0;
  font-size: 16px;
  text-align: center;
  padding: 1.2rem 0;
  color:#2d395c;
    display: block;
    z-index: 999;
    transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    /* color: var(--golden); */
    /* background-color: #191919; */
    /* background-color: var(--main-color); */
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    /* color: var(--golden); */
    font-weight: bold;
  }
  
  border-bottom: 1px solid #2d395c;
`
// const MenuLink = styled(Link)`
//   width: 100%;
//   outline: 0;
//   font-size: 16px;
//   text-align: center;
//   padding: 1.2rem 0;
//   color:var(--white);
//   display: block;
//   z-index: 3;
//   transition: all 0.3s ease 0s;
//   &:hover,
//   &:focus {
//     color: var(--golden);
//     /* background-color: #191919; */
//     background-color: var(--main-color);
//   }
//   text-decoration: none;
//   /* styles for active link */
//   &[aria-current="page"] {
//     color: var(--golden);
//     font-weight: bold;
//   }

//   overflow: hidden;
//   object-fit: contain;
//   border-bottom: 1px solid #2d395c;
// `;


const MenuLinkSubMenu = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 16px;
  text-align: center;
  padding: 1.2rem 0;
  /* color: #2d395c; */
  color: #fff;
  display: block;
  z-index: 3;
  transition: all 0.3s ease 0s;
  &:hover,
  &:focus {
    color: black;
    /* background-color: #191919; */
    background-color: var(--main-color);
  }
  text-decoration: none;
  /* styles for active link */
  &[aria-current="page"] {
    color: var(--golden);
    font-weight: bold;
  }

  overflow: hidden;
  object-fit: contain;
  /* border-top: 1px solid #2d395c; */
  border-top: 1px solid #fff;
`;

const SubMenu = styled.ul`
  display: none;
  flex-direction: column;
  justify-content: center;

  z-index: 3;
  /* background-color: #0c0c0c; */
  background-color: var(--golden-color);
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  /* color: #2d395c; */
  color: #fff;
  /* border: .5px solid var(--golden) ; */


  ${({ show }) =>show && `display:flex;`}
  ${({ showRent }) =>showRent && `display:flex;`}
`;


const SubMenuItem = styled.li`
  /* margin-bottom: 0.5rem; */
  margin-bottom: 0;
  padding-bottom: 0;
  cursor: pointer;
  list-style: none;
  

  & > a {
    display: inline-block;
    /* color: #2d395c; */
    color: #fff;
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--golden);
    }
  }
`;


const SubMenuItemSecondLevel = styled.li`
  /* margin-bottom: 0.5rem; */
  margin-bottom: 0;
  padding-bottom: 0;
  cursor: pointer;
  list-style: none;
  background-color: #e3e3e3;

  & > a {
    display: inline-block;
    color: #2d395c;
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--golden);
    }
  }
`;



const SubMenuIcon = styled(RxTriangleUp)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: #fff;
  ${({showIcon}) => showIcon && `transform: rotate(180deg);`}

  &:hover,
  &:focus {
    color: var(--golden);
  }
`;

const SubMenuIconSecondLevel = styled(RxTriangleUp)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: #2d395c;
  ${({showIconRent}) => showIconRent && `transform: rotate(180deg);`}
`;


export default connect(MenuModal);
