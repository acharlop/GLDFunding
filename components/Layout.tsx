import React, { useState } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Box, Image } from 'rebass';
import { themeProptypes } from '../theme';

import { ModalProvider, Navigation, Footer } from './';

const TopBar = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: flex-end;
  align-items: center;
  grid-column-gap: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

const Wrapper = styled(Box)<{ theme: themeProptypes; open: boolean }>`
  height: 100%;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  ${({ theme, open }) => `
    ${theme.mq[2]}{
      transform: ${open ? 'translate(-500px,0%)' : 'translate(0%,0%)'};
    }
    ${theme.mq[0]}{
      transform: ${open ? 'translate(-270px,0%)' : 'translate(0%,0%)'};
    }
  `}
`;

export const Layout = withTheme(({ theme, children }) => {
  const [open, setOpen] = useState(false);

  const Toggle = () => {
    setOpen(!open);
    if (window) {
      window.document.body.style.overflow = !open ? 'hidden hidden' : 'hidden auto';
    }
  };
  return (
    <Wrapper open={open} theme={theme}>
      <TopBar px={3} pt={2} maxWidth="1700px" open={open} theme={theme}>
        <Image
          src="./static/images/logo-white.svg"
          alt="GLD Funding logo"
          maxWidth="180px"
          alignSelf="flex-start"
          sx={{
            justifySelf: 'flex-start',
          }}
        />
        <Navigation open={open} toggle={Toggle} />
      </TopBar>
      <ModalProvider>{children}</ModalProvider>
      <Footer />
    </Wrapper>
  );
});
