import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";

import Link from './Link';

import LinkButtonHome from './LinkButtonHome';
import LinkButtonHomeSecond from './LinkButtonHomeSecond';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faMobileAlt, faShoppingCart, faHeart, faClock } from '@fortawesome/free-solid-svg-icons'

import Loading from './Loading';

import {ourTours, viewMore, bookTour} from '../Root';

import CarouselBackground from './CarouselBackground';

//animations scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimations from "animate.css/animate.min.css";

import ImageComponent from './ImageComponent';

import ReadMore from '../helpers/ReadMore';

//IMAGE ACCEPT ALL CARDS
import cardspayments from '../images/cards.jpg'

import Script from "@frontity/components/script";

// const MyComponent = () => (
//     <Script src="https://apps.elfsight.com/p/platform.js" defer />
// );

import ToursHome from './ToursHome'
import Packages from './PackageHome'

const HomePage = ({state, actions, libraries}) => {

    const arrIcons = [faSearchPlus, faMobileAlt, faHeart]

    const pageHome = state.source.page[19];

    const Html2react = libraries.html2react.Component;

    // useEffect( () => {

    //     if(state.theme.lang === "en") {
    //         actions.source.fetch("/alltours")
    //     }

    //     else {
    //         actions.source.fetch("/es/alltours")
    //     }
    // }, [])

    // const data = state.theme.lang === "en" ? state.source.get('/alltours') : state.source.get('/es/alltours')

    // let tours = [];

    // if(data.isReady) {
    //     data.items.map( ({id}) => {

    //         const singleTour = state.source.alltours[id];

    //         if(singleTour.tags.length>0 && singleTour.tags[0] === 3 || singleTour.tags[1] === 3) {
    //             tours.push(singleTour);
    //         }
    //     })
    // }

     // Component exposed by html2react.
    const Html2React = libraries.html2react.Component;

    return ( 
        <>           
        {typeof pageHome === "undefined" ? <Loading /> : 
        <>  
            <Global styles = {ScrollAnimations} />          
            <CarouselBackground />
          
          <SectionAbout>
            <AboutContainer>
                    <div>
                        <h2>
                            {pageHome.acf.about_title}
                        </h2>
                    </div>
                
                    <Content>
                        <Html2react html={pageHome.content.rendered} />
                    </Content>
              

                
                    <div>
                        <LinkButtonHome href="/contact">{bookTour}</LinkButtonHome>
                    </div>
            
                
            </AboutContainer>
            </SectionAbout>
            <ToursContainer>

                    <Packages />

                    <div>
                        <h2>{pageHome.acf.title_third_section}</h2>
                    </div>

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

                    {/* <TripAdvisorContainer>
                        <MyComponent />
                        <div class="elfsight-app-192fb416-d175-475a-9223-5c368a7c7c46"></div>
                    </TripAdvisorContainer> */}

                        <WriteReviewBox>
                            <LeftSideBox>
                                {/* <span>
                                    <ImageReviewBox alt="tripadvisor_reviews" width={Math.floor(pageHome.acf.images_group.tripadvisor_reviews.sizes["medium-width"]/2)} height={Math.floor(pageHome.acf.images_group.tripadvisor_reviews.sizes["medium-height"]/2)} src={pageHome.acf.images_group.tripadvisor_reviews.sizes.medium}/>
                                    <p>Rating</p>
                                </span> */}

                                <MyStars>
                                    <h3>5.0</h3>
                                    <span>
                                        ★★★★★
                                    </span>
                                </MyStars>
 
                            </LeftSideBox>
                            <ButtonWriteReview href="https://www.tripadvisor.com/Attraction_Review-g294314-d14803688-Reviews-Wild_Peru_Travel-Cusco_Cusco_Region.html" target="_blank">Write a Review</ButtonWriteReview>
                        </WriteReviewBox>

                        <TripAdvisorReviews>
                            {
                                Object.keys(pageHome.acf.testimonials).map( item => {

                                    return(
                                        <ReviewItem>
                                            <h4>{pageHome.acf.testimonials[item].client_name}</h4>
                                            <div>
                                            <span>★★★★★</span>
                                            <span>{pageHome.acf.testimonials[item].days_ago}</span>
                                            </div>

                                            <h3>{pageHome.acf.testimonials[item].title}</h3>
                                            <ReadMore content= {pageHome.acf.testimonials[item].comment_description} limit={60} />

                                        </ReviewItem>
                                    )
                                   
                                })

                            }
                            
                        </TripAdvisorReviews>

                        {/* <h2>{ourTours}</h2>
                
        
                    <hr></hr> */}

                    <ToursHome />
              
                {

                    // data.isReady && tours.length > 0 ? 
                  
                    //     <ToursWrap>
                    //         {
                    //             tours.reverse().map( tour => {
                    //                 return (
                    //                     <AnimationOnScroll animateIn="animate__fadeIn" delay={50} duration={1} animateOnce={true}>
                    //                         <TourItem>
                    //                             <Link href={tour.link}>
                                                                                            
                    //                                 {/* <ImageTourStyled src={tour.acf.image_tour.sizes.medium} /> */}
                    //                                 <ImageComponent media={tour.acf.image_tour.sizes} alt={tour.acf.image_tour.alt} elem="home" />

                    //                                 <InfoTour>
                    //                                     <h3>{tour.acf.title}</h3>

                    //                                     {/* <p>{tour.acf.description}</p> */}


                    //                                     <ReadMoreCard content= {tour.acf.description} limit={60} />

                                                        
                    //                                     <div>
                    //                                         <p><FontAwesomeCardTour icon={faClock} />{tour.acf.full_days}</p>
                    //                                         <span>{tour.acf.price}</span>
                    //                                     </div>

                    //                                     <ViewMoreWrapper>
                    //                                         <LinkButtonHomeSecond href={tour.link}>{viewMore}</LinkButtonHomeSecond>    
                    //                                     </ViewMoreWrapper>                                            
                    //                                 </InfoTour>                                                
                    //                             </Link>
                    //                         </TourItem>
                    //                         </AnimationOnScroll>
                                    
                    //                 )
                    //             })
                    //         }
                    //     </ToursWrap>
               
                    // :null
                }

            </ToursContainer>

            <WarrantyGroup>
            <AnimationOnScroll animateIn="animate__fadeIn" delay={50} duration={1} animateOnce={true}>
                <h3>{pageHome.acf.images_warranty.title}</h3>
            </AnimationOnScroll>

                <WarrantyImageGroup>
                    {
                        Object.keys(pageHome.acf.images_warranty.group_images).map( elem => {
                            return(
                                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={50} duration={1} animateOnce={true}>
                                    <ImageStyleWarranty src={pageHome.acf.images_warranty.group_images[elem].sizes.medium} />
                                </AnimationOnScroll>
                                
                            )
                        })
                    }
                </WarrantyImageGroup>
            </WarrantyGroup>       

            <WarrantyGroup>
                <AnimationOnScroll animateIn="animate__fadeIn" delay={50} duration={1} animateOnce={true}>
                    <h3>{pageHome.acf.images_licenses.title}</h3>

                    <p>
                        In this agency We do NOT promote or allow the sexual 
                        exploitation of children and adolescents, or any other 
                        criminal offense of which We become aware in the development of our activity, 
                        following the Law No. 29408</p>
                </AnimationOnScroll>

                <LicensesGroup>
                    {
                        Object.keys(pageHome.acf.images_licenses.group_images).map( elem => {
                            return(
                                <AnimationOnScroll animateIn="animate__fadeIn" delay={50} duration={1} animateOnce={true}>
                                    <ImagesLicenses src={pageHome.acf.images_licenses.group_images[elem].sizes.medium} />
                                </AnimationOnScroll>
                                
                            )
                        })
                    }
                </LicensesGroup>
            </WarrantyGroup>          

            <WarrantyGroup>
                <h3>We accept all cards payments</h3>
                <ImagesLicenses src={cardspayments} />
            </WarrantyGroup>
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
    /* background: linear-gradient( to top, rgba(34,49,63,.7), rgba(34,49,63,.7) );
    background-color: #f4623a; */
    background-color: var(--brand);
    height: 1000px;
    align-items: center;
    /* padding-left: 35rem;
    padding-right: 35rem; */

 
    /* @media(max-width: 768px) {
        flex-basis: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    } */

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

export const SectionAbout = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: linear-gradient( to top, rgba(34,49,63,.7), rgba(34,49,63,.7) );
    background-color: #f4623a; */
    background-color: var(--brand);
`

export const AboutContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
    width: min(80%, 77.5rem + 10vw);
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
    /* margin: 2% auto;
    text-align: center; */

    @media (min-width: 1199px) and (max-width: 1440px){
        width: min(80%, 67.5rem + 10vw);
    }

    @media (max-width: 1198px){
        width: min(98%, 67.5rem + 10vw);
    }
    
    /* padding: 4rem 22rem; */

    /* @media(max-width: 768px) {
        padding: 1rem 0;
    } */
  
    h2{
        font-size: 2rem;
        color: #fff;
        text-align: center;
        font-family: 'Lato', sans-serif;
    }

    hr {
        display: flex;
        width: 3.25rem;
        border-color: #f4623a;
        border-top: 3px solid #fff;
    }

    p {
        font-size: 1.1rem;
        color: rgba(255,255,255,.5);
        text-align: justify;
        margin-bottom: 1.2rem;
        color: #fff;
        line-height: 1.5;
        font-family: 'Lato', sans-serif;
    }   
`

const Content = styled.div`
    color: #000;
    padding: 2rem;
`;

export const TripAdvisorContainer = styled.div`
        margin-top: 2rem;
        margin-bottom: 3rem;


        @media(max-width: 768px) {
            padding: 0 1rem;
            overflow-x: hidden;
        }
`

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

const IconsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
   
    @media(max-width: 768px) {
        margin: 1rem 0;
    }

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
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    background-color: #fff;
    color: #444;
    margin: 4rem 0;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    } */

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
        /* padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2); */
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

        /* span {
            color:#3A6F84;
            font-weight: bold;
            background-color: #2ea44f;
        } */

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

const WarrantyGroup = styled.div`
    background-color: white;
    padding: 2rem 20% 10% 20%;

    h3 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 2rem;
    }
       
    @media(max-width: 768px) {
        padding: 2rem 10% 10% 10%;
    }
`

//TRIP ADVISOR TESTIMNIAL

const WriteReviewBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: rgba(17, 17, 17, 0.05);

    @media (max-width: 768px) {
        flex-direction: column;
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
`

const LeftSideBox = styled.div`
    span {
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 1.2rem;
    }
`

const MyStars = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    h3 {
        margin: 0 auto;
        padding: 0 auto;
        font-size: 1.2rem;
    }

    span {
        margin: 0 auto;
        padding: 0 auto;
        font-size: 1.2rem;
        color: rgb(252, 191, 2) !important;
    }
`
const ImageReviewBox = styled(Image)`
    object-fit: contain;
`
const ButtonWriteReview = styled.a`
    text-decoration: none;
    background-color: rgb(25, 123, 255);
    color: rgb(255, 255, 255);
    align-self: center;
    border: 4px solid rgba(0, 0, 0, 0);
    padding: .5rem;
    border-radius: 2px;
    font-size: 1rem;
    cursor: pointer;
`
const TripAdvisorReviews = styled.div`
    display: flex;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
        flex-direction: column;
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
`

const ReviewItem = styled.div`
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: rgba(17, 17, 17, 0.05);
    flex-basis: 25%;

    h3 {
        font-size: 1rem;
        color: #333333;
        margin-bottom: 0;
        line-height: 1.5;
        margin-top: .5rem;
    }

    h4 {
        font-size: .9rem;
        color: #333333;
        margin-bottom: 0;
    }

    span {
    
        :nth-of-type(1){
            font-size: 1.2rem;
            color: rgb(252, 191, 2) !important
        }

        :nth-of-type(2) {
            font-size: .8rem;
            color: #333333;
            margin-left: 1rem;
        }
    }
    p {
        margin: 0;
        font-size: .9rem;
        line-height: 1.5;
    }
`
//END TRIP ADVISOR TESTIMONIAL

const WarrantyImageGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
`

const ImageStyleWarranty = styled(Image)`
    max-width: 120px;
    max-height: 120px;
`

const LicensesGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
`

const ImagesLicenses = styled(Image)`
    max-width: 100%;
    max-height: 100%;
`