import React, {useEffect} from 'react';
import { connect, styled, css } from "frontity";
import Image from "@frontity/components/image";

import Link from './Link';

import LinkButtonHome from './LinkButtonHome';
import LinkButtonHomeSecond from './LinkButtonHomeSecond';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faMobileAlt, faShoppingCart, faHeart, faClock } from '@fortawesome/free-solid-svg-icons'

import Loading from './Loading';

import {bookAdventure, ourTours, viewMore} from '../Root';

import CarouselBackground from './CarouselBackground';

const HomePage = ({state, actions}) => {

    const arrIcons = [faSearchPlus, faMobileAlt, faShoppingCart, faHeart]

    const pageHome = state.source.page[19];

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
        <>           
        {typeof pageHome === "undefined" ? <Loading /> : 
        <>
            {/* <BackgroundColor background = {pageHome.acf.img_background.sizes.large}>          
                <MainContainer>

                    <h1>{pageHome.acf.main_title}</h1>
                    <hr></hr>
                    <p>
                        {pageHome.acf.slogan}
                    </p>
                    <div>
                        <LinkButtonHomeSecond href="/fulltours">{bookAdventure}</LinkButtonHomeSecond>
                    </div>
                    
                </MainContainer>
            </BackgroundColor>   */}

            
            <CarouselBackground />

            <AboutContainer>
                <h2>
                    {pageHome.acf.about_title}
                </h2>
              
                <p>
                    {pageHome.acf.description_about}
                </p>

                <div>
                    <LinkButtonHome href="/fulltours">{ourTours}</LinkButtonHome>
                </div>
                    
            </AboutContainer>

            <ToursContainer>
                <h2>{pageHome.acf.title_third_section}</h2>
             
                <IconsContainer>

                    {
                        Object.keys(pageHome.acf.icons_text_containter).map( (elem, idx) => {
                            return(
                                <IconsInfo>
                                    <FontAwesomeIconStyled icon = {arrIcons[idx]} />
                                    <h3>{pageHome.acf.icons_text_containter[elem].title}</h3>
                                    <p>{pageHome.acf.icons_text_containter[elem].paragraph}</p>
                                </IconsInfo>
                              
                            )
                        })
                    }
                </IconsContainer>



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

                                                    <p>{tour.acf.description}</p>
                                                    
                                                    <div>
                                                        <p><FontAwesomeCardTour icon={faClock} />{tour.acf.full_days}</p>
                                                        <span>{tour.acf.price}</span>
                                                    </div>

                                                    <ViewMoreWrapper>
                                                        <LinkButtonHomeSecond href={tour.link}>{viewMore}</LinkButtonHomeSecond>    
                                                    </ViewMoreWrapper>                                            
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
        </>
        }
        </>
     );
}
 
export default connect(HomePage);

const BackgroundColor = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    height: 1000px;
    display: flex;
   
    @media(max-width: 768px) {
        height: 673px;

        flex-direction: column;
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient( to top, rgba(34,49,63,.7), rgba(34,49,63,.7) );
    height: 1000px;
    align-items: center;
    padding-left: 35rem;
    padding-right: 35rem;
 
    @media(max-width: 768px) {
        flex-basis: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }

        h1 {
            text-transform: capitalize;
            font-size: 2rem;
       
            margin-top: 5rem;
            margin-bottom: 0;
            color: #fff;
            text-align: center;

            @media(min-width: 768px) {
                font-size: 4rem;
            }
        }

        /* hr {
            display: flex;
            width: 3.25rem;
            border-width: .2rem;
            border-color: #f4623a;
            border-top: 1px solid rgba(0,0,0,.1);
            margin: 5rem 0;
        } */

        p {
            margin-top: 0;
            margin-bottom: 1rem;
            line-height: 1.8;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color:#fff;
            //new line 
            text-align: center;

            @media(min-width: 768px) {
                font-size: 1.3rem;
                margin-bottom: 2rem;
            }
        }

        div {

            display: flex;
            justify-content: flex-start;
            align-content: center;

            @media(max-width: 768px) {
                justify-content: space-between;
            }
        }

`

export const AboutContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f4623a;
    padding: 2rem 35rem;
  
    h2{
        font-size: 2rem;
        color: #fff;
        text-align: center;
    }

    hr {
            display: flex;
            width: 3.25rem;
            border-color: #f4623a;
            border-top: 3px solid #fff;
        }

    p {
        font-size: 1.3rem;
        color: rgba(255,255,255,.5);
        text-align: center;
    }   

    div {

        display: flex;
        justify-content: flex-start;
        align-content: center;

        @media(max-width: 768px) {
            justify-content: space-between;
        }
    }

    @media(max-width: 768px) {
        padding: 1rem 0;
    }
`

export const ToursContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 2rem 10rem;

    @media(max-width: 768px) {
        padding: 2rem 0;
    }

    h2{
        font-size: 2rem;
        color: #454545;
        text-align: center;
        font-weight: 400;
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
    justify-content: space-around;
    align-items: center;
    margin: 4rem 0;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
`;

const IconsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 

    h3 {
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 0;
    }

    p {
        font-size: 1.2rem;
        color: #6c757d;
        text-align: center;
        margin-left: 2rem;
        margin-right: 2rem;

        @media(max-width: 768px) {
            p {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }   
`

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: #f4623a;
    font-size: 5rem;
`;

export const FontAwesomeCardTour = styled(FontAwesomeIcon)`
   margin-right: .3rem;
`

export const ToursWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    background-color: #fff;
    color: #444;
    margin: 4rem 0;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`;

export const TourItem = styled.div`
    margin: 2rem 2rem;
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
    }

    p {
        margin-bottom: 2rem;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            color: #3A6F84;
            margin-top: 0;
            text-transform: capitalize;
        }

        span {
            color:#3A6F84;
            font-weight: bold;
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
