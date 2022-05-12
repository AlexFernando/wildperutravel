import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Link from './Link'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import LinkButtonHomeSecond from './LinkButtonHomeSecond'

// react tab tab
// import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
// import * as customStyle from 'react-tabtab/lib/themes/bulma/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {bookTour, description, itinerary, include, destacado, notInclude, price, startTime , endTime} from '../Root'
import MyTabsStyles from 'react-tabs/style/react-tabs.css';

const TourDetails = ({state, actions}) => {

    const data = state.source.get(state.router.link);
    
    const idTour = data.id;

    const postTour = state.source.alltours[idTour];

    const summaryItems = postTour.acf.important_summary_items.split(";");

    const includeList = postTour.acf.include_list.split(";");

    const nonIncludeList = postTour.acf.not_include_list.split(";");

    const priceDetails = postTour.acf.price_details.split(";");

    return (
   
        <DetailsContainer>
  
            <DescriptionContainer>   <h2>{postTour.acf.title}</h2></DescriptionContainer>

            <Global styles={MyTabsStyles} />       

            <Tabs>
                <TabList>
                    <Tab>{description}</Tab>
                    <Tab>{itinerary}</Tab>
                    <Tab>{include}</Tab>
                    <Tab>{price}</Tab>
                    <Tab>Gallery</Tab>
                </TabList>
                
                    <TabPanel>
                        <DescriptionContainer>
                            <div>
                                <p>
                                    {postTour.acf.description}
                                </p>


                                <h3>{destacado}</h3>
                                
                                <ul>
                                    {
                                        summaryItems.map( itemList => { 
                                            return(
                                                <li><FontAwesomeIconStyled icon={faDotCircle} /> {itemList}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </DescriptionContainer>
           
                    </TabPanel>

                    <TabPanel>
                        <DescriptionContainer>
                            <div>
                                <h3>{itinerary}</h3>

                                <p><FontAwesomeIconStyled icon={faMapMarkerAlt} /> <span>{startTime}: </span>{postTour.acf.start_time}</p>

                                <p><FontAwesomeIconStyled icon={faMapMarkerAlt} /> <span>{endTime}: </span>{postTour.acf.end_time}</p>

                                <h4>{postTour.acf.day_one_title}</h4>
                            
                                {postTour.acf.day_one_description.split("%").map( itemDescription => <p>{itemDescription}</p>)}
                                
                                <h4>{postTour.acf.day_two_title}</h4>

                                {postTour.acf.day_two_description.split("%").map( itemDescription => <p>{itemDescription}</p>)}

                                <h4>{postTour.acf.day_three_title}</h4>

                                {postTour.acf.day_three_description.split("%").map( itemDescription => <p>{itemDescription}</p>)}

                                <h4>{postTour.acf.day_four_title}</h4>

                                {postTour.acf.day_four_description.split("%").map( itemDescription => <p>{itemDescription}</p>)}
                            </div>
                        </DescriptionContainer>
                    </TabPanel>
                           
                    <TabPanel>
                        <DescriptionContainer>
                            <div>
                                <h4>{include}</h4>

                                <ul>
                                    {
                                        includeList.map( includeElem => {
                                            return(
                                                <li><FontAwesomeIconCheck icon={faCheck} />{includeElem}</li>
                                            )
                                        })
                                    }
                                </ul>
                        
                                <h4>{notInclude}</h4>

                                <ul>
                                    {
                                        nonIncludeList.map( notIncludeElem => {
                                            return(
                                                <li><FontAwesomeIconTimes icon={faTimes} />{notIncludeElem}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </DescriptionContainer>
                    </TabPanel>
                    <TabPanel>
                        <DescriptionContainer>
                            <div>
                                <h3>{price}</h3>
                                <ul>
                                    {
                                        priceDetails.map( elem => {
                                            return(
                                                <li><FontAwesomeIconStyled icon={faDotCircle} /> {elem}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </DescriptionContainer>
                    </TabPanel>
                    
                    <TabPanel>
                        <div>
                         

                            {
                                postTour.acf.images_gallery ? 
                                
                                    <BorderGallery>
                                        <GalleryContainer>
                                            {Object.keys(postTour.acf.images_gallery).map(elem => {
                                                return(
                                                    <ImageGallleryStyles src= {postTour.acf.images_gallery[elem].sizes.medium} />
                                                )
                                            })
                                            }
                                        </GalleryContainer>
                                    </BorderGallery>
                                 : 
                                
                                <GalleryContainer>
                                    <p>There's no images on this gallery</p>
                                </GalleryContainer>
                            }
                        </div>   
                    </TabPanel>
            </Tabs>

            <LinkButtonHomeSecond href="/contact-tour">{bookTour}</LinkButtonHomeSecond>
        </DetailsContainer>
    )
}

export default connect(TourDetails);

const DetailsContainer = styled.div`

    margin: 8rem 0.5rem 4rem 0.5rem;

    @media(min-width: 768px) {
        margin: 12rem 1rem 4rem 1rem;
    }
`;

const DescriptionContainer = styled.div`
    
    div{
        margin: 3rem 1rem 3rem 1rem;

        @media(max-width: 768px) {
            margin: 1rem .5rem 1rem .5rem;
        }
    }

    h2 {
        color: #044E8E;
    }

    h3 {
        color: #617B05;
    }

    h4 {
        color: #4B4B4B;
    }

    p {
        color: #4B4B4B;
    }

    ul {
        padding-inline-start: 0;
        li {
            color: #4B4B4B;
            list-style: none;
            margin-bottom: 1rem;
        }
    }
` ;  

const FontAwesomeIconCheck =  styled(FontAwesomeIcon)`
    color: green;
    margin-right: .5rem;
`

const FontAwesomeIconTimes =  styled(FontAwesomeIcon)`
    color: red;
    margin-right: .5rem;
`

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: #FBBF22;
    margin-right: .5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-left: 1rem;

    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const ButtonStyles = styled.button`
    font-size: 1.3rem;
    display: inline-block;
    padding: .8rem 1.2rem;
    margin: 0 1rem 0 0;
    list-style: none;
    cursor: pointer;
    color: #fff;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: rgb(236, 139, 34);
    border-color: rgb(255, 255, 255);
    border:none;

    @media (max-width: 768px){
        margin-bottom: .5rem;
    }
`

const BorderGallery = styled.div`
    border: 1px solid rgba(222, 222, 222, 0.49);
    margin: 3rem auto;
`

const GalleryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    margin: 3% auto;

    @media (max-width: 768px){
       flex-direction: column;
    }
`
const ImageGallleryStyles = styled(Image)`
    @media (max-width: 768px){
       margin: 1rem auto;
    }
`





