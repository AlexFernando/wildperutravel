import React, {useState, useEffect} from 'react';
import {Global, connect, styled, css, Head } from "frontity";
import Image from "@frontity/components/image";

//icons
import { IconContext } from "react-icons";
import {AiOutlineArrowRight} from 'react-icons/ai'

import Loading from './Loading';
import Link from './Link';
import localAuthor from '../images/location-icon.svg'
import LinkReadPost from './LinkReadPost'

const Blog = ({state, actions, libraries}) => {

    // useEffect( () => {

        
    //     actions.source.fetch("/blog/")
    // }, [])

    // const data = state.source.get('/blog/');


    useEffect( () => {

        if(state.theme.lang === "en") {
            actions.source.fetch("/blog/")
        }

        else {
            actions.source.fetch("/es/blog/")
        }
    }, [])

    const data = state.theme.lang === "en" ? state.source.get('/blog/') : state.source.get('/es/blog/')

    let myPosts = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.blog[id];
            myPosts.push(singlePost);
        })
    }

    const pageBlog = state.source.page[478];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>
        {data.isReady ?
            <Section>   
                   <ContainerBackgroundTour>

                        <BackgroundColor>
                            <div>
                                <h3>WELCOME TO WILD PERU TRAVEL</h3>
                            </div>
                        </BackgroundColor>

                    </ContainerBackgroundTour>     
                        
                {typeof pageBlog === "undefined" ? <Loading /> : 
                    <MarginPaddingContainer>

                        <ParagraphContainer>
                            <p>Welcome to my blog page, where you'll find interesting articles related to touristic and non touristic experiences around Cusco 
                                Our blog covers trends, practical tips, packages, and more to keep you informed and up-to-date.
                                Check out our blog page for insightful and informative articles for your next adventure in Cusco. Thank you for visiting and happy reading!
                            </p>
                        </ParagraphContainer>
                       
                        {
                            data.isReady && myPosts.length > 0? 
        
                                <BlogGridContainer>
                                    {
                                        myPosts.map( post => {
                                            return(
                                                <Article>
                                                    
                                                    <Link href={post.link}>
                                                 
                                                        <FeaturedMedia>
                                                            <StyledImage src={post.acf.imagepost.sizes.medium_large} alt="blog-image" />
                                                        </FeaturedMedia>
                                                        <AuthorBio>
                                                            <Image src={localAuthor} alt="blog-image" />
                                                            <AuthorBioBox>
                                                                <AuthorName>
                                                                    Wild Peru Travel
                                                                </AuthorName>

                                                                <PublishDate>Wed Feb 01 2023</PublishDate>
                                                            </AuthorBioBox>
                                                        </AuthorBio>

                                                        <BlogArchiveBottom>
                                                            <TitlePost>{post.title.rendered}</TitlePost>
                                                            <Excerpt>
                                                    
                                                                <Html2react html={post.excerpt.rendered} />
                                                            </Excerpt>

                                                            <LinkReadPost href={post.link}>
                                                            

                                                                  
                                                          
                                                                    <IconContext.Provider value={{ color: "#df9b00", className: "global-class-name", size: "1rem" } }>
                                                                    <span>Read Post</span> <AiOutlineArrowRight/> 
                                                                    </IconContext.Provider>
                                                              
                                                              
                                                              
                                                            </LinkReadPost>
                                                        </BlogArchiveBottom>
                                                    
                                                    </Link>
                                                </Article>

                                            )
                                        })
                                    }
                                </BlogGridContainer>
        
                            :null
                        }
                    </MarginPaddingContainer>
                }
            </Section>

        : <Loading />}
        
        </>
    );
}

export default connect(Blog);

export const ContainerBackgroundTour = styled.div`
    background-image: url("https://wildperu2024.wildfreewalkingtours.com/wp-content/uploads/2022/09/mp_background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    height: 370px;
    margin-top: 6rem;
`

export const BackgroundColor = styled.div`

    background-image: linear-gradient(to top, rgba(34,49,63, .4), rgba(34, 49, 63, .4)); 
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

export const MarginPaddingContainer = styled.div`
    /* max-width: 77.5rem;
    margin: 5% auto; */

    margin-top: 5rem;
    width: min(90%, 1800px);
    margin-right: auto;
    margin-left: auto;

    h2 {
        text-align: center;
    }
`

const Section = styled.section`
    /* padding: 50px 0px; */
    background-color: #f7f7f7;
    padding: 0 0 1rem 0;
    position: relative;
    font-family: 'Lato';

    @media(max-width: 768px) { 
        max-width: 100%;}

   
`


const ParagraphContainer = styled.div`


    p{
        text-align: center;
        line-height: 1.8;
        color: #343434;
    }
`


export const BlogGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 2rem;

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }

    /* @media (min-width: 576px) and (max-width: 968px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }

    @media (min-width: 968px) and (max-width: 1440px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    } */
`

const Article = styled.article`
    max-width: 771px;
    margin: 0px auto 5rem;
    position: relative;

    @media(max-width: 768px) { 
        margin: 0 auto;
        margin-bottom: 5rem;
        max-width: 300px;
    }

    background: rgba(255, 255, 255, 0.90);
    border-radius: .4rem;
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid #ebebeb;
    line-height: 1.2;
    margin-bottom: 1rem;

`

export const FeaturedMedia = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;

    img {
        transition: all 0.8s ease-in 0s;
        border-radius: 5px;
   
    }
`
export const StyledImage = styled(Image)`
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;

`
export const AuthorBio = styled.div`
    margin-top: -3.5rem;
    background: var(--white);
    border-radius: 3px;
    padding: 0.8rem 1rem 1rem;
    display: inline-block;
    position: absolute;
    left: 6.3rem;

    img {
        border-radius: 50%;
        margin-right: 1rem;
    }

    @media(max-width: 768px) { 
        padding: 0.8rem 1rem 1rem 1rem;
        left: 2.3rem;
    }
`

export const AuthorBioBox = styled.div`
    display: inline-block;
    vertical-align: middle;
`
export const AuthorName = styled.span`
    display: block;
    color: rgb(216, 216, 216);
    font-size: 0.75rem;
    font-weight: normal;
    color: var(--brand);
    font-size: 0.8125rem;
`

export const PublishDate = styled.span`
    display: block;
    color: gray;
    font-size: 0.75rem;
`

const BlogArchiveBottom = styled.div`
    max-width: 570px;
    margin: 1.5rem auto 0px;

    @media(max-width: 768px) { 
        margin: 0 auto;
        margin-top: 1.5rem;
        max-width: 300px;
    }
`

const TitlePost = styled.h2`
    color: #000;
    font-size: 1.75rem;
    margin: 0px;
    padding-top: 24px;
    padding-bottom: 1rem;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
    line-height: 1.2;
`
const Excerpt = styled.div`
    margin-bottom: 1.25rem;

    p {
        font-size: medium;
        line-height: 1.5;
        text-align: justify;
    }
`

