import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ show, handleClose, imageSrc, imageTitle, imageDescription }) => {
  const displayDescription = imageDescription?.split(/\r?\n/)[0] || '';

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{imageTitle || displayDescription}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageSrc} alt={imageTitle || displayDescription} style={{ width: '100%', borderRadius: '10px' }} />
        {displayDescription && imageTitle && (
          <p style={{ marginTop: '1rem' }}>{displayDescription}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
