import React, {useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import Link from './Link';
import Image from "@frontity/components/image";


import {ToursContainer, ToursWrap, TourItem, InfoTour, ViewMoreWrapper, ImageTourStyled, FontAwesomeCardTour} from './Home';
import LinkButtonHomeSecond from './LinkButtonHomeSecond';

//icons
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Loading from './Loading';
import {ourTours, viewMore} from '../Root';

import {BackgroundColor} from './AllTours';

//animations scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimations from "animate.css/animate.min.css";

const SacredValley = ({state, actions}) => {

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

            console.log("tours: ",singleTour)

            if(singleTour.tags.length>0 && singleTour.tags[0] === 6 || singleTour.tags[1] === 6) {
                tours.push(singleTour);
                console.log("tours: ",singleTour)
            }
        })
    }

    const pageMachu = state.source.page[278];


    return ( 

        <>
        {typeof pageMachu === "undefined" ? <Loading /> : 
        <MachuPicchuContainer>

            <Global styles = {ScrollAnimations} />
            
            <BackgroundColor background = {pageMachu.acf.image_header.sizes.large}>          
                <AnimationOnScroll animateIn="animate__fadeIn" delay={100} duration={1.5} animateOnce={true}>
                    <h3>{pageMachu.acf.title}</h3>
                </AnimationOnScroll>
            </BackgroundColor>
           

            <ToursContainer>
                <AnimationOnScroll animateIn="animate__fadeIn" delay={100} duration={1.5} animateOnce={true}>
                    <h2>{ourTours}</h2>
                </AnimationOnScroll>
                <hr></hr>

                {

                    data.isReady && tours.length > 0 ? 

                    <ToursWrap>
                        {
                            tours.reverse().map( tour => {
                                return (
                                    <AnimationOnScroll animateIn="animate__fadeIn" delay={100} duration={1.5} animateOnce={true}>
                                        <TourItem>
                                            <Link href={tour.link}>
                                                <ImageTourStyled src={tour.acf.image_tour.sizes.medium} />
                                                
                                                <InfoTour>
                                                    <h3>{tour.acf.title}</h3>

                                                    <p>{tour.acf.description}</p>
                                                    
                                                    <div>
                                                        <p><FontAwesomeCardTour icon={faClock} />{tour.acf.full_days}</p>
                                                        <span>US$&nbsp;{tour.acf.price}</span>
                                                    </div>

                                                    <ViewMoreWrapper>
                                                        <LinkButtonHomeSecond href={tour.link}>{viewMore}</LinkButtonHomeSecond>    
                                                    </ViewMoreWrapper> 
                                                </InfoTour>
                                            </Link>
                                        </TourItem>
                                    </AnimationOnScroll>
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

export default connect(SacredValley);

const MachuPicchuContainer = styled.div`
    margin-top: 3rem;
`

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

// export const BackgroundColor = styled.div`
//     background-image: linear-gradient(to top right, rgb(136, 176, 75,0), rgba(136, 176, 75,1));
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position:center center;
//     height: 700px;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     overflow-wrap: break-word;
//     padding: 1rem 2rem;
   
//     @media(max-width: 768px) {
//         height: 673px;
//         padding: 1.5rem;
//         flex-direction: column;
//     }
// `;

// export const MainContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-basis: 60%;
//     justify-content: center;

//     @media(max-width: 768px) {
//         flex-basis: 100%;
//     }

//         h1 {
//             text-transform: capitalize;
//             font-size: 2rem;
//             letter-spacing: 4px;
//             margin-top: 5rem;
//             color: #454545;

//             @media(min-width: 768px) {
//                 font-size: 4rem;
//             }
//         }

//         p {
//             margin-top: 0;
//             margin-bottom: 2rem;
//             line-height: 1.8;
//             font-family: 'Montserrat', sans-serif;
//             width: 70%;
//             font-size: 1rem;
//             color: #454545;

//             @media(max-width: 768px) {
//                 width: 100%;
//             }

//             @media(min-width: 768px) {
//                 font-size: 1.3rem;
//                 margin-bottom: 2rem;
//             }
//         }
// `