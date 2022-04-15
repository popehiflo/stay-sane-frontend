import React from 'react';
import styledComponents from 'styled-components';
import { categories } from '../data';
import Category from './Category';

const CategoriesContainer = styledComponents.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => (
  <CategoriesContainer>
    {categories.map((category) => (
      <Category key={category.id} category={category} />
    ))}
  </CategoriesContainer>
);

export default Categories;
