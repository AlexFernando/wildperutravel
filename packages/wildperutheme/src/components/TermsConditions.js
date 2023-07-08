import React, {useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import Link from './Link'
import LinkButtonHomeSecond from './LinkButtonHomeSecond';


import Loading from './Loading';

const TermsConditions = ({state, actions, libraries}) => {
    useEffect( () => {
        if(state.theme.lang === "en") {
            actions.source.fetch("/terms-and-conditions")
        }
        else {
            actions.source.fetch("/es/terms-and-conditions")
        }
       
    }, [])
    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["442"];
    
    return(
        <>
        {typeof contentForm === "undefined" ? <Loading /> 
            :
            <Content>
            <h3>{contentForm.title.rendered}</h3>
                <Html2react html={contentForm.content.rendered} />
            </Content>
        }
    </>
    )
}


const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-content: center;
    color: #484848;
    margin-top: 10rem;
    padding-left: calc(10rem);
    padding-right: calc(10rem);
    line-height: 1.5;
    text-align: justify;

    h3 {
        font-size: 2rem;
        color: #000;
    }

    p {
        font-size: 1.2rem;
    }

    @media(max-width: 768px) {
        margin-top: 5rem;
        padding-left: calc(2rem);
        padding-right: calc(2rem);
        
        h3 {
            font-size: 1.5rem;
            color: #000;
        }

        p {
            font-size: 1rem;
        }
    }    
`


export default connect(TermsConditions);