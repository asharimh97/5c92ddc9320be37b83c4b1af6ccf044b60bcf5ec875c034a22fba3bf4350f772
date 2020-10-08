import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in;
  visibility: hidden;
  width: 100%;
  z-index: 999;

  &::-webkit-scrollbar {
    display: none;
  }

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const Content = styled.div`
  align-items: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 5px 0 rgba(60, 60, 67, 0.1),
    0 7px 10px 0 rgba(60, 60, 67, 0.07), 0 5px 14px 0 rgba(60, 60, 67, 0.06);
  opacity: 0;
  padding: 16px;
  position: relative;
  transition: all 0.3s ease;
  transform: translateY(100%);
  visibility: hidden;
  width: ${props => (props.width ? props.width : "350px")};
  max-width: 400px;
  transform: translateY(-30px);

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;

const Modal = ({ visible, id, children, onClose, width, ...props }) => {
  const componentId = id;

  const handleOutsideClick = e => {
    const modal = document.getElementById(componentId);
    if (e.target == modal) {
      onClose();
    }
  };

  useEffect(() => {
    const modal = document.getElementById(componentId);
    modal.addEventListener("click", handleOutsideClick);

    return () => {
      modal.removeEventListener("click", handleOutsideClick);
    };
  });

  const element = (
    <Overlay
      id={componentId}
      data-testid="modal-overlay"
      visible={visible}
      {...props}
    >
      <Content data-testid="modal-content" visible={visible} width={width}>
        {children}
      </Content>
    </Overlay>
  );

  return createPortal(element, document.getElementById("root"));
};

Modal.propTypes = {
  visible: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  width: PropTypes.string
};

Modal.defaultProps = {
  id: "modal",
  onClose: () => {}
};

export default Modal;
