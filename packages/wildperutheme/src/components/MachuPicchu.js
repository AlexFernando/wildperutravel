import React, {useEffect} from 'react';
import { connect, styled, css } from "frontity";
import Link from './Link';
import Image from "@frontity/components/image";

import {ToursContainer, ToursWrap, TourItem, ImageTourStyled, FontAwesomeCardTour} from './Home'

//icons
import { faClock } from '@fortawesome/free-solid-svg-icons'


import Loading from './Loading';

const MachuPicchu = ({state, actions}) => {

   /*  useEffect( () => {
        actions.source.fetch("/alltours")
    }, []) */

    const data = state.source.get('/alltours')

    let tours = [];

    if(data.isReady) {
        data.items.map( ({id}) => {

            const singleTour = state.source.alltours[id];

            console.log("tags: ", singleTour.tags);

            if(singleTour.tags.length>0 && singleTour.tags[0] === 4 || singleTour.tags[1] === 4) {
                console.log("hola")
                tours.push(singleTour);
            }
        })
    }

    console.log("tours: ", tours)


    const pageMachu = state.source.page[40];

    return ( 
        <>           
        {typeof pageMachu === "undefined" ? <Loading /> : 
        <>

            <ImageHeader src={pageMachu.acf.image_header.sizes.large}/>

            <SummaryText>
                <h2>
                    {pageMachu.acf.title}
                </h2>
                <p>
                    {pageMachu.acf.paragraph}
                </p>
                    
            </SummaryText>

            <ToursContainer>
                
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

export default connect(MachuPicchu);


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
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    height: 700px;
    display: flex;
    width: 100%;
   
    @media(max-width: 768px) {
        height: 473px;
    }
`