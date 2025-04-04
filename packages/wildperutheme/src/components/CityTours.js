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

import {MachuPicchuContainer, BackgroundColor,  ToursContainer, ToursWrap, TourItem, ImageTourStyled, InfoTour, FontAwesomeCardTour } from './AdventuresTours'


const CityTours = ({state, actions}) => {

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

            if(singleTour.tags.length>0 && singleTour.tags[0] === 9 || singleTour.tags[1] === 9) {
                tours.push(singleTour);
            }
        })
    }

    const pageMachu = state.source.page[521];


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

export default connect(CityTours);



