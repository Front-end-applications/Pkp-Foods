import React, { useState, useEffect, useContext, createContext } from "react";
import { FaTimes } from "react-icons/fa";

import { Container, Inner, CloseButton } from "./styles/modal";

const ToggleContext = createContext();

export default function Modal({ children, ...restProps }) {
  const [show, setShow] = useState(restProps.show);

  useEffect(() => {
    setShow(restProps.show);
  }, [restProps.show]);

  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      {show && <Container onClick={restProps.onClick}>{children}</Container>}
    </ToggleContext.Provider>
  );
}

Modal.Inner = function ModalInner({ children, ...restProps }) {
  const { show } = useContext(ToggleContext);
  return show && <Inner {...restProps}>{children}</Inner>;
};

Modal.CloseButton = function ModalClose({ ...restProps }) {
  return (
    <CloseButton onClick={restProps.onClick} {...restProps}>
      <FaTimes />
    </CloseButton>
  );
};
