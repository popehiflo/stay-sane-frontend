import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';

const CategoryContainer = styledComponents.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const CategoryImage = styledComponents.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryInfo = styledComponents.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styledComponents.h1`
  color:white;
  margin-bottom: 20px;
`;
const Button = styledComponents.button`
  border:none;
  padding: 10px;
  background-color: white;
  color:gray;
  cursor: pointer;
  font-weight: 600;
`;

const Category = ({ category }) => (
  <CategoryContainer>
    <CategoryImage src={category.img} />
    <CategoryInfo>
      <Title>{category.title}</Title>
      <Button>Search Now</Button>
    </CategoryInfo>
  </CategoryContainer>
);

Category.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.object.isRequired,
};

export default Category;
