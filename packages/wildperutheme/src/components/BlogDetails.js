import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";
import {MarginPaddingContainer, AuthorBioBox, AuthorName, PublishDate, FeaturedMedia, StyledImage} from './BlogPage'
import Loading from './Loading';



const BlogDetails = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const idTour = data.id;

    const postTour = state.source[data.type][idTour];

    const Html2react = libraries.html2react.Component;

    return (
        <>
            <ContainerBackgroundTour>
                <BackgroundColor>
                    <div>
                        <h3>WELCOME TO WILD PERU TRAVEL BLOG</h3>
                    </div>
                </BackgroundColor>
            </ContainerBackgroundTour> 

        {typeof postTour === "undefined" ? <Loading /> : 

            <BlogMain>
                <HeaderDetails>
                    <Content>
                        <h2><Html2react html={postTour.title.rendered} /></h2>
                
                        <AuthorBioBox>
                            <AuthorName>
                                Wild Peru Travel
                            </AuthorName>

                            <PublishDate>Fri Jul 01 2022</PublishDate>
                        </AuthorBioBox>
              
                        <Html2react html={postTour.content.rendered} />
                    </Content>

                </HeaderDetails>
        
             
       
            </BlogMain>
        }
        
        </>

    )
}

export const ContainerBackgroundTour = styled.div`
    background-image: url("https://wildperu2024.wildfreewalkingtours.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-26-at-7.17.31-PM-1.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    height: 370px;
    margin-top: 6rem;
`


export const BackgroundColor = styled.div`

    background-image: linear-gradient(to top, rgba(34,49,63, .5), rgba(34, 49, 63, .5)); 
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    overflow-wrap: break-word;
    height: 370px;


    div {
        margin-left: calc(6rem + 1.5625vw);
        line-height: 2;

        @media(max-width: 768px) {
            margin-left: 1rem;
        }

        h3 {
            text-transform: capitalize;
            font-size: 2rem;
        
            font-weight: 600;

            @media(max-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }


`;

const BlogMain = styled.div`
    max-width: 969px;
    width: 100%;
    margin: 2rem auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;


    @media(max-width: 768px) { 
        max-width: 100%;
        width: 100%;
        padding-right: 0px;
        padding-left: 0px;
    }
`

const HeaderDetails = styled.div`
    margin-top: 10vh;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    color: #484848;
    line-height: 1.5;

    h1 {
        margin-bottom: 0;
    }
    span {
        color: gray;
        margin-top: 0;
    }
`
const AuthorBioDetails = styled.div`

    background: var(--white);
    border-radius: 3px;
    /* padding: 0.8rem 1rem 1rem; */
    display: inline-block;
    left: 6.3rem;

    /* img {
        border-radius: 50%;
        margin-right: 1rem;
    } */
    
`


const Content = styled.div`
    color: #484848;
    margin-top: 2rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    line-height: 1.5;
    word-break: break-word;
    text-align: justify;


    h2 {

    }

    img {
       
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    
 
    @media(max-width: 1200px) {
        flex-direction: column;
        align-content: center;

        padding-left: 0;
        padding-right: 0;
    }


`;

export default connect(BlogDetails);

