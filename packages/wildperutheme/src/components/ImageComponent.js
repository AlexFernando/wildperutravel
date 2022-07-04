import React from 'react'
import {connect, styled} from "frontity";
import Image from "@frontity/components/image";

const ImageComponent = ({media, elem, alt}) => {

    if(elem === 'home') {
    
        if(window.outerHeight < 768) {
            return (
                <>
                    <ImageTourStyled src={media.thumbnail} alt={alt} />
                </>
            )
        }


        else {
            return (
                <>
                    <ImageTourStyled src={media.medium} alt={alt}/>
                </>
            )
        }        
    }

    else {

        if(window.outerHeight < 768) {
            console.log("pantalla mobile: ", 768)

            return (
                <>
                    <Image src={media.thumbnail} alt= {alt}  />
                </>
            )
        }

        else {
            console.log("pantalla grande")
            return (
                <>
                    <Image src={media.medium} alt= {alt}/>
                </>
            )
        }
    }
}

export default connect(ImageComponent);
    
export const ImageTourStyled = styled(Image)`
    width: 100%;
    height: 20.625rem;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: .5rem .5rem 0 0;
`
