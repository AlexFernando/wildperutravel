import React, {useEffect} from 'react';
import { connect, styled, css } from "frontity";
import Link from './Link'
import {ToursContainer, ToursWrap, TourItem, ImageTourStyled, FontAwesomeCardTour} from './Home'
import {ImageHeader, SummaryText} from './MachuPicchu'

//icons
import { faClock } from '@fortawesome/free-solid-svg-icons'


import Loading from './Loading';

const FullTours = ({state, actions}) => {

    /* useEffect( () => {
        actions.source.fetch("/alltours")
    }, []) */

    const data = state.source.get('/alltours')

    let tours = [];

    if(data.isReady) {
        data.items.map( ({id}) => {

            const singleTour = state.source.alltours[id];

            tours.push(singleTour);
        })
    }

    const pageAllTours = state.source.page[47];

    return ( 
        <>           
        {typeof pageAllTours === "undefined" ? <Loading /> : 
        <>
            <ImageHeader src={pageAllTours.acf.image_header.sizes.large}/>
            <SummaryText>
                <h2>
                    {pageAllTours.acf.title}
                </h2>
                <hr></hr>
                <p>
                    {pageAllTours.acf.paragraph}
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

export default connect(FullTours);