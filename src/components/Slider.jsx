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
  opacity: 0.5;
  z-index: 2;
`;

const SliderContainer = styledComponents.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex - 100}vw);
`;

const Slide = styledComponents.div`
  width: 100vw;
  background-color: ${(props) => props.bg};
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
            Slide!
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
