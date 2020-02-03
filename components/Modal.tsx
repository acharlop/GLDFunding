import React, { ReactNode } from 'react';
import Modal, { Props as ReactModalProps } from 'react-modal';
import { rgba } from 'polished';
import { MdClose } from 'react-icons/md';

Modal.setAppElement('body');

export type ModalProps = {
  children: ReactNode;
  showToggle?: boolean;
} & Pick<ReactModalProps, 'isOpen' | 'onRequestClose'>;

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

const CustomModal = ({ children, onRequestClose, showToggle = true, ...etc }: ModalProps) => {
  return (
    <Modal
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      style={styles}
      {...etc}
    >
      {showToggle && (
        <MdClose
          data-name="close-button"
          onClick={onRequestClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
          size={22}
        />
      )}
      {children}
    </Modal>
  );
};

export { CustomModal as Modal };
