import React from "react";
import Container from "./Container";

const Footer = props => {
  return (
    <footer data-testid="footer-component" {...props}>
      <Container className="text-center py-3">
        <p className="text-xs text-gray-600">
          Copyright &copy; {new Date().getFullYear()}. Made by Ashari Muhammad H
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
