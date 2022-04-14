import React from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faMagnifyingGlass,
  faBell,
  faBellSlash,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styledComponents.header`
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
`;

const HeaderContent = styledComponents.div`
  //background-color: red;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--black);
`;

const HeaderLogo = styledComponents.div`
  flex: 1;
`;
const Logo = styledComponents.h2`
  font-weight: normal;
  width: max-content;
`;

const HeaderSearch = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Internationalization = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContent = styledComponents.div`
  // border: 0.5px solid lightgray;
  border: var(--light-border);
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const InputSearch = styledComponents.input`
  border: none;
`;

const HeaderMenu = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styledComponents.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;

const Header = () => {
  const itemsCarrito = 2;
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogo>
          <Logo>
            <FontAwesomeIcon icon={faBrain} style={{ color: '#1977cc' }} beat />
            {' '}
            Mental Health
          </Logo>
        </HeaderLogo>
        <HeaderSearch>
          <Internationalization>EN</Internationalization>
          <SearchContent>
            <InputSearch placeholder="search" />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'gray', fontSize: 16 }} />
          </SearchContent>
        </HeaderSearch>
        <HeaderMenu>
          { itemsCarrito > 1
            ? (
              <MenuItem>
                <FontAwesomeIcon icon={faBell} bounce />
              </MenuItem>
            )
            : (
              <MenuItem>
                <FontAwesomeIcon icon={faBellSlash} />
              </MenuItem>
            )}
          <MenuItem>
            <FontAwesomeIcon icon={faCartShopping} />
          </MenuItem>
          <MenuItem>
            Users
          </MenuItem>
        </HeaderMenu>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
