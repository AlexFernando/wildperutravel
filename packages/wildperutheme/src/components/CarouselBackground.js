import React from 'react';
import Slider from './Slider';
import Images from './images';
import CarouselStyles from './index.css' ;
import { Global } from "frontity";

const CarouselBackground = () => {
  return (

    <>
    <Global styles={CarouselStyles} />
    <Slider images={Images} />
    </>
  );
}

export default CarouselBackground;
