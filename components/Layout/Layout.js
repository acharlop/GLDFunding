import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Image } from "rebass";
import { ModalProvider } from "../modals";
import theme from "../../theme";
import { Navigation } from "../index";

const TopBar = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: flex-end;
  align-items: center;
  grid-column-gap: 10%;
`;
const Wrapper = styled(Box)`
  height: 100%;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(0%, 0%);
  ${theme.mq[3]} {
    transform: ${({ open }) =>
      open ? "translate(-75%,0%)" : "translate(0%,0%)"};
  }
`;
export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper open={open}>
      <Box as="header">
        <TopBar m="auto" px={3} py={1}>
          <Image
            src="/static/images/logo.svg"
            alt="GLD Funding logo"
            maxWidth="180px"
          />
          <Navigation open={open} setOpen={setOpen} />
        </TopBar>
      </Box>
      <ModalProvider>{children}</ModalProvider>
    </Wrapper>
  );
};
