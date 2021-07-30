import React, {useEffect} from 'react';
import { connect, styled, css } from "frontity";

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

//form tour
import FormTour from './FormTours';


const TourDetails = ({state, actions}) => {

    const data = state.source.get(state.router.link);
    
    const idTour = data.id;

    const postTour = state.source.alltours[idTour];

    console.log("Detailed Tour: ", postTour);

    const summaryItems = postTour.acf.important_summary_items.split(";");

    const includeList = postTour.acf.include_list.split(";");

    const nonIncludeList = postTour.acf.not_include_list.split(";");

    console.log("summary", summaryItems, " ", includeList, " ", nonIncludeList);

    return (
        <DetailsContainer>
            
            <DescriptionContainer>
                <h2>{postTour.acf.title}</h2>
                <div>
                    <p>
                        {postTour.acf.description}
                    </p>


                    <h3>Lo mas destacado</h3>
                    
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

                <div>
                    <h3>Itinerario</h3>

                    <p><FontAwesomeIconStyled icon={faMapMarkerAlt} /> <span>Inicio: </span>{postTour.acf.start_time}</p>

                    <p><FontAwesomeIconStyled icon={faMapMarkerAlt} /> <span>Final: </span>{postTour.acf.end_time}</p>

                    <h4>{postTour.acf.day_one_title}</h4>

                    <p>
                        {postTour.acf.day_one_description}
                    </p>

                    <h4>{postTour.acf.day_two_title}</h4>

                    <p>
                        {postTour.acf.day_two_description}
                    </p>
                </div>

                <div>
                    <h4>Incluye</h4>

                    <ul>
                        {
                            includeList.map( includeElem => {
                                return(
                                    <li><FontAwesomeIconCheck icon={faCheck} />{includeElem}</li>
                                )
                            })
                        }
                    </ul>
            
                    <h4>No Incluye</h4>

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

                <div>
                    <h3>Precio</h3>
                    <p>{postTour.acf.price_details}</p>
                </div>
            </DescriptionContainer>

            <FormTour />
            
        </DetailsContainer>

    )
}

export default connect(TourDetails);

const DetailsContainer = styled.div`
    margin: 12rem 4rem 4rem 4rem;
    display: flex;
    justify-content: space-between;

    @media(max-width: 768px) {
        flex-direction: column;
        margin: 5rem 1rem 2rem 1rem;
    }
`;

const DescriptionContainer = styled.div`
    
    div{
        margin: 3rem 0;
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