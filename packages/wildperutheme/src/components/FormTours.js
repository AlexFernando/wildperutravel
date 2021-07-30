import React, {useEffect} from 'react';
import {connect, styled, css} from "frontity";

import Loading from './Loading';

const FormTours = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact-tour")
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm =  state.source.page["104"];

    return ( 

        <>
        {typeof contentForm === "undefined" ? <Loading /> 
            :
                <Content>
                    <h2>Book your dream</h2>
                    <h3>Please, fill out the form. We'll back to you as soon as possible</h3>
                    <Html2react html={contentForm.content.rendered} />
                </Content>
        }
        </>
    );
}
 
const Content = styled.div`

    h2 {
        color: #044E8E;
    }

    h3 {
        color: #617B05;
        margin-bottom: 3rem;
    }


    font-size: 1.1rem;
    padding-left: 10rem;

    @media(max-width: 768px) {
        padding-left: 0rem;
    }
  
    input, textarea, select {
        margin:1rem 1rem 2rem 1rem;
        border-radius: 5px;
        border: 2px solid #000;
        height: 30px;
        width: 25vw;
    }

    @media(max-width: 768px) {
        input, textarea, select {
            width: 70vw;
        }
    }

    textarea {
        height: 150px;
    }

    select {
        height: 45px;
        font-size: 1.3rem;
        color: #4B4B4B;
    }

    input[type="submit"] { 
       
        background-color: #f4623a;
        height: 60px;    
        padding: 1.5rem;
    
        border: 1px solid #fff;
        font-weight: bold;
        font-size: 1rem;
        text-transform: uppercase;
        color: #FFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        
        &:hover {
            background-color: #ee3e0d;
            transition: all 0.4s;
        }
    }
`;


export default connect(FormTours);