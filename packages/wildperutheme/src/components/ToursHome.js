import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link';
import ReadMore from '../helpers/ReadMoreReal';
import LinkMoreInfo from './LinkMoreInfo'
//animations scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimations from "animate.css/animate.min.css";
import {popularTours} from '../Root';


const ToursHome = ({state, actions, libraries}) => {

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

            if(singleTour.tags.length>0 && singleTour.tags[0] === 3 || singleTour.tags[1] === 3) {
                tours.push(singleTour);
            }
        })
    }


    return ( 

        <MarginPaddingContainer>
        <ContainerToursHome>

            <h3>{popularTours}</h3>

            <ToursHomeWrap>
          
            {
                
                         data.isReady && tours.length > 0 ? 

                         tours.reverse().map( singleTour => {
                            
                        return (
                            <AnimationOnScroll animateIn="animate__fadeIn" delay={50} duration={1.2} animateOnce={true}>
                            <TourHomeItem>
                                <Link href={singleTour.link}>
                            
                                    <picture>
                                        <source media="(max-width: 799px)" srcSet={singleTour.acf.image_tour.sizes.medium} />
                                        <source media="(min-width: 800px)" srcSet={singleTour.acf.image_tour.sizes.medium_large} />
                                        <ImageTourCard src={singleTour.acf.image_tour.sizes.medium} alt="hometour" />
                                    </picture>

                                    <InfoHomeTour>
                                        <span>{singleTour.acf.price}</span>
                                        <h4>{singleTour.acf.title}</h4>
                                        <LastInfo>
                                            <p>English, Spanish</p>
                                            <LinkMoreInfo href={singleTour.link}>+ Info</LinkMoreInfo>
                                        </LastInfo>    
                                    </InfoHomeTour>
                                </Link>
                            </TourHomeItem>
                            </AnimationOnScroll>
                        )
                    })
                
                :null
            }
            
            </ToursHomeWrap>

        </ContainerToursHome>

    </MarginPaddingContainer>

);
}


 
export default connect(ToursHome);



/**HOME TOURS STYLES */

export const MarginPaddingContainer = styled.div`
    max-width: 77.5rem;
    margin: 5% auto;
`


const ContainerToursHome = styled.div`
        margin: 4rem 0;

        h3 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        }

`

export const ToursHomeWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;

    padding-left: calc(0.5rem/2);
    padding-right: calc(0.5rem/2);

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (min-width: 576px) and (max-width: 950px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`;

export const TourHomeItem = styled.div`
    margin: 2rem 0;
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
`;

export const InfoHomeTour = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    span {
        color: #313131;
        font-weight: bold;
        margin: 0;
        font-size: 1.6vh;

        @media (max-width: 768px) {
            font-size: 2vh;
        } 
    }

    h4{
        color: #484848;
        margin: 1.2rem 0;
        font-size: 1.8vh;

        @media (max-width: 768px) {
            font-size: 2.5vh;
        } 
    }

    p {
        color: var(--brand);
        font-weight: bold;
        margin: 0;
        font-size: 1.5vh;

        @media (max-width: 768px) {
            font-size: 2vh;
        } 
    }

    li {
        color: #484848;
        text-transform: capitalize;

        font-size: 2vh;

            @media (max-width: 768px) {
                font-size: 2vh;
            } 
    }

`

export const LastInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
`

export const ImageTourCard = styled(Image)`
    width: 100%;
    height: 25vh;
    border-radius:.5rem .5rem 0 0;

    @media (max-width: 767px) {
        width: 100%;
        height: 30vh;
    } 
`
/**END HOME TOURS STYLES */
