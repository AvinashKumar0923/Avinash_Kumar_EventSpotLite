import React from 'react';
import '../styles/Modal.css';

const Modal = ({ event, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate__animated animate__fadeInUp" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={event.imageUrl} alt={event.eventName} className="modal-image" />
                <h3>{event.eventName}</h3>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Description:</strong> {event.description}</p>
            </div>
        </div>
    );
};

export default Modal;
