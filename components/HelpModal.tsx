import React from 'react';
import { Modal, useModalContext } from './';
import { HELP_MODAL_KEY } from '../constants';

export const HelpModal = () => {
  const { modalId, closeModal } = useModalContext();
  return (
    <Modal isOpen={modalId === HELP_MODAL_KEY} onRequestClose={closeModal}>
      Help Modal
    </Modal>
  );
};
