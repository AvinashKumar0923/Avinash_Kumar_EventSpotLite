import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/FeaturedEvents.css';
import mockData from '../data/mock_data.json';

const FeaturedEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleCardClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="featured-events">
            <h2>Featured Events</h2>
            <div className="events-grid">
                {mockData.map((event, index) => (
                    <div
                        key={index}
                        className="event-card"
                        onClick={() => handleCardClick(event)}
                    >
                        <img src={event.imageUrl} alt={event.eventName} className="event-image" />
                        <h3>{event.eventName}</h3>
                        <p>{event.location}</p>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <Modal
                    event={selectedEvent}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default FeaturedEvents;
