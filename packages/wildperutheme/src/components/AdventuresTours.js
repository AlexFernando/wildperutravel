import React, {useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import Link from './Link';
import Image from "@frontity/components/image";

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock } from '@fortawesome/free-solid-svg-icons'
import Loading from './Loading';
import {ourTours} from '../Root';

//animations scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimations from "animate.css/animate.min.css";

import ReadMore from '../helpers/ReadMoreReal';


const AdventuresTours = ({state, actions}) => {

    useEffect( () => {

        if(state.theme.lang === "en") {
            actions.source.fetch("/alltours")
        }

        else {
            actions.source.fetch("/es/alltours")
        }
    }, [])

    const data = state.theme.lang === "en" ? state.source.get('/alltours') : state.source.get('/es/alltours')

    let tours = [];

    if(data.isReady) {
        data.items.map( ({id}) => {

            const singleTour = state.source.alltours[id];

            if(singleTour.tags.length>0 && singleTour.tags[0] === 7 || singleTour.tags[1] === 7) {
                tours.push(singleTour);
            }
        })
    }

    const pageMachu = state.source.page[285];


    return ( 

        <>
        {typeof pageMachu === "undefined" ? <Loading /> : 
        <MachuPicchuContainer>

            <Global styles = {ScrollAnimations} />

            <BackgroundColor background = {pageMachu.acf.image_header.url}>    
                <AnimationOnScroll animateIn="animate__fadeIn" delay={100} duration={1.5} animateOnce={true}>  
                    <h3>{pageMachu.acf.title}</h3>
                </AnimationOnScroll>    
            </BackgroundColor>

            <ToursContainer>
                    <h2>{ourTours}</h2>
                <hr></hr>

                {

                    data.isReady && tours.length > 0 ? 

                    <ToursWrap>
                        {
                            tours.reverse().map( tour => {
                                return (

                                    <TourItem>
                                        <Link href={tour.link}>
                                            <ImageTourStyled src={tour.acf.image_tour.sizes.medium} />
                                            
                                            <InfoTour>
                                                <h3>{tour.acf.title}</h3>

                                                <ReadMore content= {tour.acf.description} limit={60} />
                                                
                                                <div>
                                                    <p><FontAwesomeCardTour icon={faClock} />{tour.acf.full_days}</p>
                                                    <span>{tour.acf.price}</span>
                                                </div>

                                            </InfoTour>
                                        </Link>
                                    </TourItem>
                          
                                )
                            })
                        }
                    </ToursWrap>

                    :null
                }

            </ToursContainer>
        </MachuPicchuContainer>
        }
        </>
     );
}

export default connect(AdventuresTours);

export const MachuPicchuContainer = styled.div`
    margin-top: 3rem;
`

export const BackgroundColor = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 350px; 
    align-items: center;
    padding-left: 10rem;
    margin-top: 5%;
   
    @media(max-width: 768px) {
        height: 300px;
        flex-direction: column;
    }

    h3 {
        text-transform: capitalize;
        font-size: 2rem;
        margin-bottom: 0;
        color: #fff;
        text-align: center;
        text-shadow: 1px 1px 2px black;

        @media(min-width: 768px) {
            font-size: 2.5rem;
        }
    }
`;

export const SummaryText = styled.div`
    text-align: center;
    margin: 2rem 10rem;
    color: #4B4B4B;

    @media(max-width: 768px) {
        margin: 2rem 1rem;            
    }

    h2 {
        font-size: 2.4rem;
        text-transform: uppercase;
    }

    p {
        font-size: 1.2rem;
    }
`

export const ImageHeader = styled(Image)`
    display: flex;
    justify-content: center;
    align-self: center;
    max-height: 100%;
    max-width: 50%;

    @media(max-width: 768px) {
        margin-top: 2rem;
    }
`
// TOURS GRID STYLES

export const ToursContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    /* padding: 5rem 10rem; */
    /* @media(max-width: 768px) {
        padding: 2rem 0;
    } */

    h2{
        font-size: 2rem;
        color: #454545;
        text-align: center;
        font-weight: 400;
        margin-top: 3rem;
    }

    hr {
       
        width: 3.5rem;
        border-width: .2rem;
        border-color: #f4623a;
        background-color:#f4623a ;
        align-self: center;
    }

`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    width: min(90%, 83.5rem + 10vw);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(90%, 77.5rem + 10vw);
    }

    @media (max-width: 1198px){
        width: min(98%, 67.5rem + 10vw);
        padding: 1rem 0;
    }
`;


export const FontAwesomeCardTour = styled(FontAwesomeIcon)`
   margin-right: .3rem;
`

export const ToursWrap = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 2rem;
    
    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        /* padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2); */
    }

    @media (min-width: 576px) and (max-width: 968px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    width: min(90%, 83.5rem + 10vw);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(90%, 77.5rem + 10vw);
    }

    @media (max-width: 1198px){
        width: min(98%, 67.5rem + 10vw);
        padding: 1rem 0;
    }
`;

export const TourItem = styled.div`
    margin: 2rem .5rem;
    box-shadow: grey 0px 15px 30px 1px;
    border-radius: .5rem;
`;

export const InfoTour = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.2rem;
    line-height: 1.5;

    h3{
        color: #3A6F84;
        color: #191919;
    }

    p {
        margin-bottom: 2rem;
     
    }

    div {
        display: flex;
        justify-content: space-between;
    

        p {
            color: #3A6F84;
            color: #191919;
        
            margin-top: 0;
            text-transform: capitalize;
        }

        span {
          
            background-color: #2ea44f;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            padding: 1rem;
        }
    }

`

export const ViewMoreWrapper = styled.div`
    align-self: center;
`

export const ImageTourStyled = styled(Image)`
    width: 100%;
    height: 20.625rem;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: .5rem .5rem 0 0;
`
