import React from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styledComponents.header`
  height: 60px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
`;

const HeaderContent = styledComponents.div`
  background-color: red;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const HeaderLogo = styledComponents.div`
  flex: 1;
`;

const HeaderSearch = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Internationalization = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
`;
const Search = styledComponents.div`
  // border: 1px solid lightgray;
  border: var(--border);
  align-items: center;
`;

const HeaderMenu = styledComponents.div`
  flex: 1;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <HeaderLogo>
        <FontAwesomeIcon icon={faBrain} />
        {' '}
        Mental Health
      </HeaderLogo>
      <HeaderSearch>
        <Internationalization>EN</Internationalization>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          search text ...
        </Search>
      </HeaderSearch>
      <HeaderMenu>Menu</HeaderMenu>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
