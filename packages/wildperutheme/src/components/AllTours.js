import React, {useState, useEffect} from 'react';
import { connect, styled, css } from "frontity";
import Link from './Link'
import {ToursContainer, ToursWrap, TourItem, InfoTour, ViewMoreWrapper, ImageTourStyled, FontAwesomeCardTour} from './Home'
// import {ImageHeader, BackgroundColor, MainContainer} from './MachuPicchu'
import LinkButtonHomeSecond from './LinkButtonHomeSecond';

//icons
import { faClock } from '@fortawesome/free-solid-svg-icons'


import Loading from './Loading';

import {ourTours} from '../Root';

// filter tags
import useFilterTags from './UseFilterTags';

const FullTours = ({state, actions}) => {

    const {allCategory, FilterSubcategoriesUI} = useFilterTags("");

    const [filterByTag, setFilterByTag] = useState([]);

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

            tours.push(singleTour);
        })
    }

    const pageAllTours = state.source.page[47];

    useEffect( () => {

        if(allCategory === 2) {
            setFilterByTag([]);
        }
      
        else if(allCategory !== "") {
            const filter = tours.filter(elem => (parseInt(elem.tags[1]) || parseInt(elem.tags[0])) === parseInt(allCategory))
            setFilterByTag(filter);
        } 
    }, [allCategory])

 

    return ( 
        <>           
        {typeof pageAllTours === "undefined" ? <Loading /> : 
        <>
            <BackgroundColor background = {pageAllTours.acf.image_header.sizes.large}>          
                <h3>{pageAllTours.acf.title}</h3>         
            </BackgroundColor>  


            <ToursContainer>
                
                <h2>{ourTours}</h2>
                <hr></hr>

                <TagSet>
                    {FilterSubcategoriesUI()}
                </TagSet>


                {
                    data.isReady && tours.length > 0 && filterByTag.length === 0? 

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
                                                    <LinkButtonHomeSecond href={tour.link}>{ourTours}</LinkButtonHomeSecond>    
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

                {
                    data.isReady && filterByTag.length > 0 ? 
                        <ToursWrap>
                            {
                                filterByTag.reverse().map( tour => {
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
                                                        <LinkButtonHomeSecond href={tour.link}>{ourTours}</LinkButtonHomeSecond>    
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


export const BackgroundColor = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    height: 350px;
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

const TagSet = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 5rem;


    @media(max-width: 768px) {
        flex-wrap: wrap;
    }
`
export default connect(FullTours);