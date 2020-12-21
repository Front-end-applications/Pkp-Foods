import React from "react";

import { Modal, PinCodeModal } from "../../../components/customerPortal";

export default function ModalContainer({ children, ...restProps }) {
  return (
    <Modal show={restProps.show}>
      <Modal.Inner>
        <Modal.CloseButton onClick={restProps.closeModal} />

        <PinCodeModal>
          <PinCodeModal.Title>Please enter your pin code</PinCodeModal.Title>

          <PinCodeModal.Desc>
            Our Offerings May Vary Based On Your Location
          </PinCodeModal.Desc>

          <PinCodeModal.Desc>
            Explore Better Deals By Providing Your Pincode!
          </PinCodeModal.Desc>

          <PinCodeModal.Form>
            <PinCodeModal.Input placeholder="Please enter your pin code" />
            <PinCodeModal.Submit>Submit</PinCodeModal.Submit>
          </PinCodeModal.Form>
        </PinCodeModal>
      </Modal.Inner>
    </Modal>
  );
}
