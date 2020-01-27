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
  grid-column-gap: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;
const Wrapper = styled(Box)`
  height: 100%;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(0%, 0%);
  ${theme.mq[2]} {
    transform: ${({ open }) =>
      open ? "translate(-75%,0%)" : "translate(0%,0%)"};
  }
`;
export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper open={open}>
      <TopBar px={3} maxWidth="1700px">
        <Image
          src="/static/images/logo-white.svg"
          alt="GLD Funding logo"
          maxWidth="180px"
        />
        <Navigation open={open} setOpen={setOpen} />
      </TopBar>
      <ModalProvider>{children}</ModalProvider>
    </Wrapper>
  );
};
