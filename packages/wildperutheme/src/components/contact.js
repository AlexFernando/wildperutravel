import React from 'react';
import {styled } from "frontity";
import {faMapMarkerAlt, faStreetView} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookSquare, faTripadvisor} from '@fortawesome/free-brands-svg-icons';
import LinkButton from './LinkButtonHomeSecond';

import Form from './form'

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
    margin-top: 2rem;
    flex-basis: 50%;
    flex-wrap: wrap;

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

            li {
                margin: 0 1.5rem 2rem 1.5rem;

                a {
                    color : #fff;
                    font-size: 2rem;
                }

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

        @media(max-width: 768px) {
            font-size: 1.2rem;
        }

    }
`;

const ContactForm = styled.div`
    
    @media(max-width: 768px) {
        padding: 1rem;
    }
    
    h3 {
        font-size: 2rem;
        font-weight: 300;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 2rem;

        div {
            display: flex;
            flex-direction: column;
        }

        label {
            letter-spacing: 1px;
            font-size: 1.2rem;
        }

        input {
            height: 30px;
        }

        input, textarea {
            margin:1rem 1rem 2rem 1rem;
            border: none;
            border-radius: 5px;
        }
    }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: 1rem;
    font-size: 3rem;

    @media(max-width: 768px) {
        font-size : 2rem;
        margin-right: 0;
    }
`;


const Contact = () => {

    return ( 
        <ContactContainer>
            <ContactElement>
                <h2>Let's Get In Touch!</h2>
                <h3>Ready to start your new adventure with us? Fill out the form or visit our social networks and get in contact</h3>
            
                <ul>
                        <li><a href="https://www.facebook.com/wildperutravel/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer"><FontAwesomeIconStyled icon={faFacebookSquare}/></a></li>
                        <li><a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html" alt="Share on TripAdvisor" aria-label="Link to TripAdvisor" target="_blank" rel="noreferrer"><FontAwesomeIconStyled icon={faTripadvisor}/></a></li>
                        <li><a href="https://www.facebook.com/wildperutravel/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer"><FontAwesomeIconStyled icon={faInstagram}/></a></li>
                        <li><a href="https://www.facebook.com/wildperutravel/" alt="Share on Youtube" aria-label="Link to Youtube" target="_blank" rel="noreferrer"><FontAwesomeIconStyled icon={faYoutube}/></a></li>
                </ul>

                <ul>
                    <li><FontAwesomeIconStyled icon={faMapMarkerAlt}/>Wild Peru Travel</li>
                   
                    <li><FontAwesomeIconStyled icon={faStreetView}/>Calle Marquez Nº 256, Cusco, Peru.</li>
                </ul>
            </ContactElement>

            <Form />
        </ContactContainer>

    );
}
 
export default Contact;