import React from "react";
import { connect, styled } from "frontity";
import Link from "../linktrue";
import Nav from "./nav";
import MobileMenu from "./menu";
import Image from "@frontity/components/image";
// import Logo from '../../static/images/logo.jpeg';


const Header = ({ state }) => {
  return (
    <AllNavbar>
      <BrandContainer>
        <StyledLink link="/">

          <ImageStyled alt="logo" src={'https://wildperu2024.wildfreewalkingtours.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-22-at-11.08.22-AM.jpeg'} />
         
        </StyledLink>
        
        <MobileMenu />
      </BrandContainer>
      <Nav />

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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;

    border-bottom: 1px solid #AEB6BF;
  }
`

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    width: auto;
  }
  margin-left: auto;
  /* margin-right: auto; */
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
    border-radius: 50%; 

    @media(min-width: 768px) {
          width: 110px;
          height: 110px;
          margin-top: 0;
          margin-left: auto;
    }
`

