import React, { useRef } from 'react';
import { connect, styled, css, Global } from "frontity";
import useSlider from '../hooks/useSlider'
import CarouselStyles from './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import LinkButtonGetStarted from './LinkButtonGetStarted';

//animations scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimations from "animate.css/animate.min.css";
import {titleHome, subtitleHomeOne, subtitleHomeTwo, getStarted} from '../Root';

const Slider = ({images}) => {
  
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
      <>
        <Global styles={CarouselStyles} />
        <Global styles = {ScrollAnimations} />
        <HomeComponent className="slider" ref={slideImage} title="background image">
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left" aria-label="slide Left">
                <FontAwesomeIcon icon ={faAngleLeft}/>
              </button>
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h1>{titleHome}</h1>
                <div className="slider--feature">
                  <h2 ref={slideText} className="feature--title"></h2>
                  <p  className="feature--text">{subtitleHomeOne}</p>
                  <p  className="feature--text">{subtitleHomeTwo}</p>
                  <LinkButtonGetStarted href="/hiking">{getStarted}</LinkButtonGetStarted>
                </div>
              </AnimationOnScroll>
              <button onClick={goToNextSlide} className="slider__btn-right" aria-label="slide right">
                <FontAwesomeIcon icon ={faAngleRight}/>
              </button>
            </div>
        </HomeComponent>
      </>
    );
}


export const HomeComponent = styled.div`

  h1{
    font-size: 2.8rem;
  }
  
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }  
`


export default connect(Slider);