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

const HomePage = ({state, actions}) => {

    useEffect( () => {
        actions.source.fetch("/alltours")
    }, [])

    const data = state.source.get('/alltours')

    let tours = [];

    if(data.isReady) {
        data.items.map( ({id}) => {

            const singleTour = state.source.alltours[id];

            if(singleTour.tags.length>0 && singleTour.tags[0] === 3 || singleTour.tags[1] === 3) {
                tours.push(singleTour);
            }
        })
    }


    const pageHome = state.source.page[19];

    return ( 
        <>           
        {typeof pageHome === "undefined" ? <Loading /> : 
        <>
            <BackgroundColor background = {pageHome.acf.img_background.sizes.large}>          
                <MainContainer>

                    <h1>{pageHome.acf.main_title}</h1>
                    <hr></hr>
                    <p>
                        {pageHome.acf.slogan}
                    </p>
                    <div>
                        <LinkButtonHomeSecond href="/fulltours">Book Your Adventure</LinkButtonHomeSecond>
                    </div>
                    
                </MainContainer>
            </BackgroundColor>  

            <AboutContainer>
                <h2>
                    {pageHome.acf.about_title}
                </h2>
                <hr></hr>
                <p>
                    {pageHome.acf.description_about}
                </p>

                <div>
                    <LinkButtonHome href="/fulltours">Our Tours</LinkButtonHome>
                </div>
                    
            </AboutContainer>

            <ToursContainer>
                <h2>It's easy to get to your new Adventure</h2>
                <hr></hr>

                <IconsContainer>
                    <IconsInfo>
                        <FontAwesomeIconStyled icon={faSearchPlus} />
                        <h3>Look for your tour</h3>
                        <p>Different packages to fit with your time and budget.</p>
                    </IconsInfo>

                    <IconsInfo>
                        <FontAwesomeIconStyled icon={faMobileAlt} />
                        <h3>Book in advance</h3>
                        <p>Book your tour now and We keep in contact.</p>
                    </IconsInfo>

                    <IconsInfo>
                        <FontAwesomeIconStyled icon={faShoppingCart} />
                        <h3>Online Payment</h3>
                        <p>You can pay with our differents payment online methods.</p>
                    </IconsInfo>

                    <IconsInfo>
                        <FontAwesomeIconStyled icon={faHeart} />
                        <h3>Be prepare to enjoy!</h3>
                        <p>We'll provide you with all the details, so you can have the best experience!.</p>
                    </IconsInfo>
                </IconsContainer>

                <h2>OUR TOURS</h2>
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
                                            
                                            <h3>{tour.acf.title}</h3>

                                            <p>{tour.acf.description}</p>
                                            
                                            <div>
                                                <p><FontAwesomeCardTour icon={faClock} />{tour.acf.full_days}</p>
                                                <span>US$&nbsp;{tour.acf.price}</span>
                                            </div>
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

        hr {
            display: flex;
            width: 3.25rem;
            border-width: .2rem;
            border-color: #f4623a;
            border-top: 1px solid rgba(0,0,0,.1);
            margin: 1.5rem 0;
        }

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

const ImageStyledHome = styled(Image)`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 10rem;
    max-height: 60%;
    max-width: 50%;

    @media(max-width: 768px) {
        margin-top: 2rem;
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
    padding: 2rem 15rem;

    @media(max-width: 768px) {
        padding: 2rem 0;
    }

    h2{
        font-size: 2rem;
        color: #000;
        text-align: center;
        font-weight: 400;
    }

    hr {
        display: flex;
        width: 3.25rem;
        border-width: .2rem;
        border-color: #f4623a;
        border-top: 1px solid rgba(0,0,0,.1);
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const TourItem = styled.div`
    margin: 2rem 2rem;
    flex-basis: 25%;

    h3{
        color: #3A6F84;
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
            color:  #3A6F84;
            font-weight: bold;
        }
    }
`;

export const ImageTourStyled = styled(Image)`
    width: 100%;
    height: 20.625rem;
    object-fit: cover;
    object-position: 50% 50%;
`
