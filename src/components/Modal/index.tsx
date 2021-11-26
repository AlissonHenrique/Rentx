import React, { useState } from 'react';
import Modal from 'react-modal';

import { RiCheckFill } from 'react-icons/ri';

interface IProps {
  title: string;
  description: string;
  isOpen: boolean;
  handleCloseModal: () => void;
  handleModalOk: () => void;
}

export function ModalSuccess({
  title,
  description,
  isOpen,
  handleCloseModal,
  handleModalOk,
}: IProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="modal-2"
        overlayClassName="overlay"
      >
        <RiCheckFill size={100} color="#10A754" />
        <h1>{title}</h1>
        <p>{description}</p>
        <button type="button" onClick={handleModalOk}>
          OK
        </button>
      </Modal>
    </>
  );
}
