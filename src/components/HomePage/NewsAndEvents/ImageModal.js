import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ show, handleClose, imageSrc, imageDescription }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>{imageDescription}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={imageSrc} alt={imageDescription} style={{ width: '100%', borderRadius: '10px' }} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ImageModal;
