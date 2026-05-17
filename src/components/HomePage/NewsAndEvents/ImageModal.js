import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ show, handleClose, imageSrc, imageTitle, imageDescription }) => (
  <Modal 
    show={show} 
    onHide={handleClose} 
    size="lg" 
    centered
    dialogClassName="custom-magazine-modal"
  >
    <Modal.Header closeButton style={{ borderBottom: '1px solid #f1eef7', backgroundColor: '#fdfcf3' }}>
      <Modal.Title style={{ 
        fontFamily: '"Poppins", sans-serif', 
        fontWeight: '600', 
        color: '#340468',
        fontSize: '1.25rem'
      }}>
        {imageTitle || "Event Bulletin Overview"}
      </Modal.Title>
    </Modal.Header>
    
    <Modal.Body style={{ backgroundColor: '#1a1520', padding: '0' }}>
      {/* 
        Image Viewer Wrapper: 
        Using a dark background (#1a1520) matches premium galleries. 
        If an image is ultra-wide or ultra-tall, the dark space handles the letterboxing seamlessly.
      */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#1a1520',
        padding: '10px'
      }}>
        <img 
          src={imageSrc} 
          alt={imageTitle} 
          style={{ 
            width: '100%',
            height: 'auto',
            maxHeight: '70vh', /* Dynamic viewport matching downscales perfectly on mobile */
            objectFit: 'contain', /* CRITICAL: Displays the entire uncropped image */
            display: 'block'
          }} 
        />
      </div>
      
      {/* Description Context Block below the image box */}
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <h5 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', color: '#1a1520', marginBottom: '10px' }}>Detailed Chronicle</h5>
        <p style={{ color: '#5a5263', lineHeight: '1.6', fontSize: '0.98rem', margin: 0 }}>{imageDescription}</p>
      </div>
    </Modal.Body>
    
    <Modal.Footer style={{ borderTop: '1px solid #f1eef7', backgroundColor: '#fdfcf3' }}>
      <Button 
        style={{ backgroundColor: '#340468', borderColor: '#340468', padding: '10px 24px', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem' }} 
        onClick={handleClose}
      >
        Dismiss Window
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ImageModal;