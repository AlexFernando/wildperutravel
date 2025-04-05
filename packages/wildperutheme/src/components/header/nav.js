import React , {useState} from "react";
import { connect, styled } from "frontity";
import Link from "../linktrue";
import {RxTriangleDown, RxTriangleLeft} from 'react-icons/rx'
import {RxTriangleRight} from 'react-icons/rx'
import {CiFacebook, CiInstagram, CiPhone} from 'react-icons/ci'
import {BsEnvelope, BsTelephoneOutbound} from 'react-icons/bs'
import {TbBrandWhatsapp} from 'react-icons/tb'

import { FaTripadvisor, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LangSwitcher from './langSwitcher';
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
            
    <NavbarContainer>
      <NavBarUp>  
      <SocialMediaSuperior>

          <li>
              <PhoneIcon />
              <a href="#">(+51) 945 160616 - (+51) 924 149002</a>
 
            </li>
            <li>
              <NavBarIcon />
              <a href="mailto:wildperu2@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
            
              wildperu2@gmail.com
              </a>
            </li>
          <li>
            <a href="https://www.facebook.com/wildperutravel/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaFacebook />
              </IconContext.Provider> 
            </a>
          </li>
          <li>
            <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html" alt="Share on TripAdvisor" aria-label="Link to TripAdvisor" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaTripadvisor />
              </IconContext.Provider> 
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/wildperutravel/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/wildperutravel/" alt="Share on Youtube" aria-label="Link to Youtube" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaYoutube />
              </IconContext.Provider>
            </a>
          </li>
      </SocialMediaSuperior>

        <LangSwitcher />
    
      </NavBarUp>
  
      <NavBarDown>
        {state.theme.menu.map(({name, link, submenu}) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;

        const [showSubMenu, setShowSubMenu] = useState(false);
        const [showSubMenuSecond, setShowSubMenuSecond] = useState(false);
        
              return(
                <>
                  {submenu.length === 0? 
                  
                    <NavItem>
                        <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
                    </NavItem>
                    :
                    <>
                      <NavItem key={name} onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
                          <Link link={link}>
                            {name}
                            <SubMenuIcon showIcon = {showSubMenu} />
                          </Link>    

                          {
                            name === 'Neighborhoods'? 
                            <SubMenu show={showSubMenu}>
                              {

                                submenu.map(({name, link}) => {
                                  return(
                                    <SubMenuItemGrid key={name}>
                                      <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
                                    </SubMenuItemGrid>
                                  )
                                })
                              }
                            </SubMenu>
                          :
                          
                          <SubMenu show={showSubMenu}>

                            {
                              submenu.map(({name, link}) => {
                                return(
                                  <SubMenuItem key={name}>
                                    <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
                                  </SubMenuItem>
                                )
                              })
                            }
                          </SubMenu>    
                          }                       
                        </NavItem>
                      </>
                    }
                  </>
              )
        
          })

        
        }
          
            
      </NavBarDown>
  
  </ NavbarContainer>
            
          
            
);

export default connect(Nav);

// const NavContainer = styled.nav`
//   list-style: none;
//   display: flex;
//   max-width: 100%;
//   box-sizing: border-box;
//   padding: 0 24px;
//   margin: 0;
//   overflow-x: auto;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;



const NavbarContainer = styled.div`
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  margin-right: auto;
  margin-left: 4rem;
  width: max(1050px, 65%);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  height: 100%; /**New line added */
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const NavBarUp = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  background-color: var(--main-color);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const NavBarDown = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  height: 25%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;


const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #000;
  font-size: 1rem;
  text-transform: uppercase;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    color:var(--black);
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--brand);
    }

    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      //color:var(--brand);
      color: var(--brand);
      font-weight  : 900;
      text-decoration: underline;
    }
  }
  
  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }

`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  opacity: 0;
  z-index: 9999;
  background-color: #fff;
  padding: 0;
  margin-top: 0;
  border: 1px solid var(--brand) ;
  ${({ show }) =>show && `display:flex; flex-direction: column; opacity:1; transition: all 0.4s ease;  z-index: 9999;`}
  
`;

const SubMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  list-style: none;
  height: 100%;
  padding: 0 0;
  width: 100%;

  &:hover {
    background-color: var(--brand);

    a{
      color: var(--white);  
    }
  }

  border-bottom: 1px solid var(--blue-dark);
  border-left: 1px solid var(--blue-dark);

  & > a {
    display: inline-block;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-grow: 1;
    align-items: center;
    line-height: 2.7em;
    color:var(--main-color);
    text-transform: capitalize;
    font-size: var(--step--1);
    transition: all 0.4s ease;
    width: 100%;
    /* margin-top: .5rem; */
    /* margin-bottom: 0.5rem; */
    padding: 0 .5rem;
    text-decoration: none;
  }
`;

const SubMenuItemGrid = styled(SubMenuItem)`
  &:before{
    content: ">";
    align-self: center;
    margin-left: .5rem;

    &:hover{
      color: #fff;
    }
  }

`

const SubMenuGrid = styled.ul`
    display: none;
    grid-template-columns: repeat(2, 1fr);
    /* grid-gap: 1rem; */
    position: absolute;
    opacity: 0;
    z-index: 9999;
    background-color: var(--golden-color);
    padding: 0;
    margin-top: 0;
    border-top: 3px solid var(--main-color) ;

    ${({ show }) =>show && `display:grid; opacity:1; transition: all 0.4s ease;  z-index: 9999;`}
`

const SubMenuSecond = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  left: 100%;
  top: -.4vh; 
  margin: 0;
  padding: 0;
  z-index: 1100;
  background-color: var(--golden-color);
  border-left: 1px solid var(--blue-dark);
  border-top: 3px solid var(--blue-dark);
  ${({ showSecond }) =>showSecond && `display:flex; transition: all 0.4s ease;  z-index: 9999;`}
`;

const SubMenuIcon = styled(RxTriangleDown)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: var(--main-color);
  ${({showIcon}) => showIcon && `transform: rotate(180deg);`}
  vertical-align: text-bottom;
`

const SubMenuIconSecond = styled(RxTriangleRight)`
  margin-left: .5rem;
  transition: transform 0.2s ease-in-out;
  color: var(--main-color);
  ${({showIconSecond}) => showIconSecond && `transform: rotate(180deg); color: #fff;`}
  vertical-align: text-bottom;
`;

export const SocialMediaSuperior = styled.ul`
  display: flex;
  flex-grow: 1;
  margin-left: 0;
  padding-left: 0;

  @media(max-width: 1024px) {
    display: none;
  }

  li {
    list-style: none;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 1rem;
    color: #000;
    margin: auto 1rem;
  

    @media(max-width: 1024px) {
      margin-right: .5rem;
    }

    &:nth-of-type(3) {
      margin-left: auto;
    }

    &:nth-of-type(6) {
      margin-right: auto;
    }

    a {
      text-decoration: none;
      color: #262626;
      color: #000;
      font-weight: 500;
      margin-left: .5rem;
    }
  }
`
export const NavBarIcon = styled(BsEnvelope)`
  color: #000;
  font-size: 1.5rem;
  vertical-align: middle;
`
export const WhatsAppIcon  = styled(TbBrandWhatsapp)`
  color: #000;
  font-size: var(--step-2);
  vertical-align: middle;
`;

export const FacebookIcon  = styled(CiFacebook)`
  color: #000;
  font-size: var(--step-2);
  vertical-align: middle;
`;

export const InstagramIcon  = styled(CiInstagram)`
  color: #000;
  font-size: var(--step-2);
  vertical-align: middle;
`;

export const PhoneIcon = styled(BsTelephoneOutbound)`
  color: #000;
  font-size: 1.5rem;
  vertical-align: middle;
`;


const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
 
    font-size: 2rem;

    @media(max-width: 768px) {
        font-size : 1.8rem;

    }
`;

// const SocialMediaSuperior = styled.ul`

//     display: flex;

//     @media(max-width: 768px) {
//         display: none;
//     }

//     li {
//         list-style: none;
//         font-weight: 100;
//         letter-spacing: 1px;
//         font-size: 1rem;
//         margin-right: 1rem;

//         @media(max-width: 768px) {
//           margin-right: .5rem;
//         }

//         a {
//             text-decoration: none;
//             color: #262626;
//         }
//     }
// `

// {state.theme.menu.map(([name, link]) => {
//   // Check if the link matched the current page url
//   const isCurrentPage = state.router.link === link;
//   return (
//     <NavItem key={name}>
//       {/* If link url is the current page, add `aria-current` for a11y */}
//       <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
//         {name}
//       </Link>
//     </NavItem>
//   );
// })}