import React, {useEffect} from 'react';
import {styled, connect } from "frontity";
import {faMapMarkerAlt, faStreetView, faEnvelope, faBuilding, faUserTie, faBook} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import Form from './form';

import Loading from './Loading';

import { FaTripadvisor, FaInstagram, FaYoutube, FaFacebook, FaMobileAlt,FaWhatsapp } from 'react-icons/fa';
import { IconContext } from "react-icons";

const ContactContainer = styled.div`
    display: flex;
    background-color: #333333;
    color: #fff;
    justify-content: space-around;
    align-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const ContactElement = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    flex-basis: 50%;

    @media(max-width: 768px) {
        flex-basis: 100%;
        h2 {
            font-size: 1rem;
        }
    }

    ul {
        margin: 0;
        padding: 0;

        &:first-of-type {
            display: flex;
            justify-content: center;
            align-content: center;
        }

        li {
                margin: 1rem 1rem 1rem 1rem;

                a {
                    color : #fff;
                    font-size: 1rem;
                }

            }
    }

    h2 {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 2rem;
    }

    h3 {
        margin: 2rem 0;
        font-size: 1.2rem;
        font-weight: 300;
    }

    ul {
        margin-top: 1rem;
    }

    li {
        list-style: none;
        font-weight: 200;
        margin-bottom: 1rem;
        letter-spacing: 1px;
        font-size: 1rem;

        @media(max-width: 768px) {
            font-size: .9rem;
        }

        a {
            text-decoration: none;
            color: #fff;
        }

    }
`;


const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: 1rem;
    font-size: 2.2rem;

    @media(max-width: 768px) {
        font-size : 1.5rem;
        margin-right: .5rem;
    }
`;


const Contact = ({state, actions, libraries}) => {

    useEffect( () => {
        if(state.theme.lang === "en") {
            actions.source.fetch("/footer-info")
        }

        else {
            actions.source.fetch("/es/footer-info")
        }

    }, [])

    const pageFooterInfo = state.source.page[230];

    return ( 

        <>
        {typeof pageFooterInfo === "undefined" ? <Loading /> 
            :
        <ContactContainer>
            <ContactElement>
                <h2>{pageFooterInfo.acf.title}</h2>
                <h3>{pageFooterInfo.acf.subtitle}</h3>
            
                <ul>
                    <li>
                        <a href="https://www.facebook.com/wildperutravel/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5rem" } }>
                                <FaFacebook />
                            </IconContext.Provider> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html" alt="Share on TripAdvisor" aria-label="Link to TripAdvisor" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5rem" } }>
                                <FaTripadvisor />
                            </IconContext.Provider> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/wildperutravel/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5rem" } }>
                                <FaInstagram />
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/wildperutravel/" alt="Share on Youtube" aria-label="Link to Youtube" target="_blank" rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5rem" } }>
                                <FaYoutube />
                            </IconContext.Provider>
                        </a>
                    </li>

                </ul>

                <ul>
                    <li>
                        
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5rem" } }>
                            <FaMobileAlt />
                        </IconContext.Provider>{pageFooterInfo.acf.mobile}
        
                    </li>

                    <li>
                            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5rem" } }>
                                <FaWhatsapp />
                            </IconContext.Provider>{pageFooterInfo.acf.whatsapp_info}
                        
                    </li>
                    <li><a href="mailto:wildperutravel@gmail.com"><FontAwesomeIconStyled icon={faEnvelope}/></a>{pageFooterInfo.acf.gmail}</li>
                    
                    <li><FontAwesomeIconStyled icon={faBuilding}/>Razón Social: Wild Perú Travel E.I.R.L </li>
                    <li><FontAwesomeIconStyled icon={faBook}/>RUC: 20603620896 </li>
                    <li><FontAwesomeIconStyled icon={faUserTie}/>Representatne Legal: Casio Valdez Quispe. </li>
                    
                    <li><FontAwesomeIconStyled icon={faStreetView}/>{pageFooterInfo.acf.street_office}</li>

                   
                </ul>
            </ContactElement>

            <Form />
        </ContactContainer>
      }
      </>
    );
}
 
export default connect(Contact);
