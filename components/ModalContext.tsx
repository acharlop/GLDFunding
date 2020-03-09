import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ModalContextType = {
  modalId?: string;
  openModal: (id: string) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  modalId: undefined,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalId, setModalId] = useState<string | undefined>(undefined);
  const openModal = (id: string) => {
    console.log('open', id);
    setModalId(id);
  };

  const closeModal = () => {
    setModalId(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        modalId,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModalContext = () => useContext(ModalContext);
export const ModalConsumer = ModalContext.Consumer;
