import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import '../styles/FeaturedEvents.css';
import 'animate.css';
import mockData from '../data/mock_data.json';

const FeaturedEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [scrollDirection, setScrollDirection] = useState(''); // Track scroll direction

    const handleCardClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    // Update items per page based on screen size
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(mockData.length / itemsPerPage);
    const paginatedData = mockData.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setScrollDirection('right'); // Set scroll direction
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setScrollDirection('left'); // Set scroll direction
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="featured-events">
            <h2>Featured Events</h2>
            <div className="events-grid">
                {paginatedData.map((event, index) => (
                    <div
                        key={`${currentPage}-${index}`} // Unique key for re-render
                        className={`event-card animate__animated ${
                            scrollDirection === 'right' ? 'animate__slideInRight' : 'animate__slideInLeft'
                        }`}
                        onClick={() => handleCardClick(event)}
                    >
                        <img src={event.imageUrl} alt={event.eventName} className="event-image" />
                        <h3>{event.eventName}</h3>
                        <p>{event.location}</p>
                    </div>
                ))}
            </div>
            <div className="pagination-controls">
                <button onClick={prevPage} disabled={currentPage === 0} className="pagination-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="pagination-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
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
