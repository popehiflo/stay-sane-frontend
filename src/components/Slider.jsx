import React, { useState } from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { sliders } from '../data';

const SliderWrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styledComponents.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  color: var(--blue);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === 'left' && '10px')};
  right: ${(props) => (props.direction === 'right' && '10px')};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;

const SliderContainer = styledComponents.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styledComponents.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const SlideContentImg = styledComponents.div`
  height: 100%;
  flex: 1;
`;
const SlideImage = styledComponents.img`
  height: 70%;
`;

const SlideContentInfo = styledComponents.div`
  flex: 1;
  padding: 50px;
`;
const SlideTitle = styledComponents.h1`
  font-size: 70px;
  color: var(--black);
  text-shadow: var(--text-shadow);
`;
const SlideDescription = styledComponents.p`
  margin: 50px 0px;
  font-size: 20px;
  color: var(--light-color);
  font-weight: 500;
`;
const SlideButton = styledComponents.button`
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderWrapper>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
      <SliderContainer slideIndex={slideIndex}>
        {sliders.map((item) => (
          <Slide key={item.idSlide} bg={item.colorSlide}>
            <SlideContentImg>
              <SlideImage src={item.imgSlide} />
            </SlideContentImg>
            <SlideContentInfo>
              <SlideTitle>{item.titleSlide}</SlideTitle>
              <SlideDescription>{item.descriptionSlide}</SlideDescription>
              <SlideButton>Make an Appointment</SlideButton>
            </SlideContentInfo>
            <SlideContentInfo />
          </Slide>
        ))}
      </SliderContainer>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </SliderWrapper>
  );
};

export default Slider;
