import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Modal({
  open,
  label,
  overlayCSS,
  contentCSS,
  closeModal,
  children,
}) {
  return (
    <ReactModal
      /* Boolean describing if the modal should be shown or not. */
      isOpen={open}
      /* String indicating how the content container should be announced
     to screenreaders */
      contentLabel={label}
      /* String className to be applied to the overlay.
     See the `Styles` section for more details. */
      overlayClassName={overlayCSS}
      /* String className to be applied to the modal content.
     See the `Styles` section for more details. */
      className={contentCSS}
      /* Function that will be run when the modal is requested
     to be closed (either by clicking on overlay or pressing ESC).
     Note: It is not called if isOpen is changed by other means. */
      onRequestClose={closeModal}
      /* Boolean indicating if the overlay should close the modal */
      shouldCloseOnOverlayClick={true}
      /* Boolean indicating if pressing the esc key should close the modal
     Note: By disabling the esc key from closing the modal
     you may introduce an accessibility issue. */
      shouldCloseOnEsc={true}
    >
      {children}
    </ReactModal>
  );
}
