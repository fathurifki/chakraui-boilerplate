import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H1 from '../H1';
import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <StyledHeader>
      <A href="https://www.hydego.me/" target="_blank" rel="noopener noreferer">
        <H1>Hydego</H1>
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
