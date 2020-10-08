import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled(Container)`
  min-height: calc(100vh - 103px);
`;

const Layout = ({ children, props }) => {
  return (
    <>
      <Navbar data-testid="navbar" />
      <Main data-testid="main-component" as="main" className="py-4">
        {children}
      </Main>
      <Footer data-testid="footer" />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
