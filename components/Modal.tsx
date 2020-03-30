import React, { ReactNode } from 'react';
import Modal, { Props as ReactModalProps } from 'react-modal';
import { rgba } from 'polished';
import { MdClose } from 'react-icons/md';

import { useModalContext } from '../context';

Modal.setAppElement('body');

export type ModalProps = {
  children: ReactNode;
  showToggle?: boolean;
  modalKey: string;
  isOpen?: boolean;
} & Pick<ReactModalProps, 'onRequestClose'>;

const styles = {
  content: {
    position: 'relative' as 'relative',
    top: 'auto',
    left: 'auto',
    bottom: 'auto',
    right: 'auto',
    padding: 0,
    zIndex: 9999,
    width: 'auto',
    height: 'auto',
    border: 0,
    borderRadius: 4,
  },
  overlay: {
    background: rgba('#000', 0.5),
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const CustomModal = ({
  children,
  onRequestClose,
  isOpen,
  showToggle = true,
  modalKey,
  ...etc
}: ModalProps) => {
  const { modalId, closeModal } = useModalContext();
  return (
    <Modal
      isOpen={isOpen === undefined ? modalId === modalKey : isOpen}
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      onRequestClose={onRequestClose === undefined ? closeModal : onRequestClose}
      closeTimeoutMS={300}
      style={styles}
      {...etc}
    >
      {showToggle && (
        <MdClose
          data-name="close-button"
          onClick={onRequestClose === undefined ? closeModal : onRequestClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 99,
          }}
          size={22}
        />
      )}
      {children}
    </Modal>
  );
};

export { CustomModal as Modal };
