import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext({
  openModalId: "",
  openModal: () => {},
  closeModal: () => {}
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState("");
  const openModal = id => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId("");
  };

  return (
    <ModalContext.Provider
      value={{
        openModalId,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
