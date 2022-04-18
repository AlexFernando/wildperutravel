import React, { useState } from 'react';
import {Global, connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
// import SpanishImage from '../../static/images/es.svg';
// import EnglishImage from '../../static/images/us.svg';

const LangSwitcherMobile = ({state, actions}) => {

  let myLink = "/";
  let linkSpanish = "";
  //let linkFrench = "";
  let arrayEnglish = [];

  if(state.router.link.includes("/es/")) {
    linkSpanish = state.router.link;
    // linkFrench = state.router.link.replace("/es/", "/fr/")
    arrayEnglish = state.router.link.split("/");
    console.log("link : " , arrayEnglish);
    if(arrayEnglish.length >= 5){
      myLink += arrayEnglish[2] +"/"+ arrayEnglish[3];
    }

    else {
      myLink += arrayEnglish[2];
    }

  }

//   else if(state.router.link.includes("/fr/")) {
//     linkFrench = state.router.link;
//     linkSpanish = state.router.link.replace("/fr/", "/es/")
//     arrayEnglish = state.router.link.split("/");
//     myLink += arrayEnglish[2];
//   }


  else {
    linkSpanish = "/es" + state.router.link;
    // linkFrench = "/fr" + state.router.link;
    myLink = state.router.link;
  }

  return(

      <FlagContainer>
          <a href={myLink}><ImageFlagStyles src={'https://restapi.wildfreewalkingtours.com/wp-content/uploads/2022/04/US-flag.png'}/></a>
          <a href={linkSpanish}> <ImageFlagStyles src={'https://restapi.wildfreewalkingtours.com/wp-content/uploads/2022/04/spanish_flag.png'}/> </a>
          {/* <a href={linkFrench}><ImageFlagStyles src={FrenchImage}/> </a>  */}
      </FlagContainer>
  
  
  )
}

export default connect(LangSwitcherMobile);

const FlagContainer = styled.div`
  display: flex;
  margin-left: 2%;
  z-index: 999;
  justify-content: center;

  @media(max-width: 768px) {
    margin-left: 1rem;
  }

  a {
    margin-right: 1rem;
  }
`
const ImageFlagStyles = styled(Image)`
  width: 30px;
  height: 30px;
`