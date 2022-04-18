import React from "react";
import { connect, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTripadvisor, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IconContext } from "react-icons";

const SocialMediaSuperiorMobile = ({ state }) => {

  return (
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
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(SocialMediaSuperiorMobile);

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: 1rem;
    font-size: 2.5rem;

    @media(max-width: 768px) {
        font-size : 1.8rem;
        margin-right: .5rem;
    }
`;

const SocialMediaSuperior = styled.ul`

    display: flex;
    z-index: 999;
    justify-content: center;

    @media(min-width: 768px) {
        display: none;
    }

    li {
        list-style: none;
        font-weight: 100;
        margin-right: 1rem;
        letter-spacing: 1px;
        font-size: 1rem;

        a {
            text-decoration: none;
            color: #262626;
        }
    }
`
