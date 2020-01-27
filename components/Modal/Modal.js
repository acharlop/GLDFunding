import React from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const customStyles = {
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    bottom: "auto",
    right: "auto",
    padding: "0",
    zIndex: 9999,
    width: "auto",
    height: "auto",
    border: "none",
    borderRadius: "4px"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "110",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
Modal.setAppElement("body");
const CustomModal = ({ children, toggle, show, full }) => {
  customStyles.content.width = full ? "100%" : "auto";
  customStyles.content.height = full ? "100%" : "auto";
  customStyles.content.borderRadius = full ? "0" : "4px";
  return (
    <Modal
      isOpen={show ? show : false}
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      onRequestClose={toggle}
      style={customStyles}
      closeTimeoutMS={300}
    >
      {toggle && (
        <MdClose
          data-name="close-button"
          onClick={toggle}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem"
          }}
          size={22}
        />
      )}
      {children}
    </Modal>
  );
};

export { CustomModal as Modal };
