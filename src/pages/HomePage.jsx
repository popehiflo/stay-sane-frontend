import React from 'react';
import styledComponents from 'styled-components';
import Header from '../components/Header';
import Slider from '../components/Slider';

const Fondo = styledComponents.div`
  background: #f5f5f5;
`;

const HomePage = () => (
  <div>
    <Header />
    <Fondo>
      <Slider />
    </Fondo>
  </div>
);

export default HomePage;
