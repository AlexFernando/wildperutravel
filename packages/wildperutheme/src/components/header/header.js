import React from "react";
import { connect, styled } from "frontity";
import Link from "../linktrue";
import Nav from "./nav";
import MobileMenu from "./menu";
import Image from "@frontity/components/image";
// import Logo from '../../static/images/logo.jpeg';
import LangSwitcher from './langSwitcher';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTripadvisor, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Header = ({ state }) => {
  return (
    <AllNavbar>
      <BrandContainer>
        <StyledLink link="/">
          <ImageStyled src={'https://restapi.wildfreewalkingtours.com/wp-content/uploads/2022/04/logo.jpeg'} />
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />

      <SocialMediaSuperior>
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
    </AllNavbar>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const AllNavbar = styled.div`
    
    /* height: 15vh; */
  @media (min-width: 768px) {
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    z-index: 10;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 15vh;

    border-bottom: 1px solid #AEB6BF;
  }
`

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  background-color: #fff;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight:800;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color:var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color:var(--black);
  }
`;

const ImageStyled = styled(Image)`
    width: 90px;
    height: 90px;
    margin-left: 1rem;
    margin-top: 5px;

    @media(min-width: 768px) {
          width: 120px;
          height: 120px;
          margin-top: 0;
          margin-left: 10rem;
    }
`

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
 
    font-size: 2rem;

    @media(max-width: 768px) {
        font-size : 1.8rem;

    }
`;

const SocialMediaSuperior = styled.ul`

    display: flex;

    @media(max-width: 768px) {
        display: none;
    }

    li {
        list-style: none;
        font-weight: 100;
        letter-spacing: 1px;
        font-size: 1rem;
        margin-right: 1rem;

        @media(max-width: 768px) {
          margin-right: .5rem;
        }

        a {
            text-decoration: none;
            color: #262626;
        }
    }
`
