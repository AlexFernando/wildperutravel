import React from 'react';
import { connect, styled, css } from "frontity";
import FormTours from './FormTours';

const ContactTours = ({state, actions}) => {

    return(
        <ContactTour>
            <FormTours />
        </ContactTour>
    )
}

export default connect(ContactTours);

const ContactTour = styled.div`
    margin-top: 12rem;
 

    @media(max-width: 768px) {
        margin-top: 6rem;
        text-align: center;
    }
`

