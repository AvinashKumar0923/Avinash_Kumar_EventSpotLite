import React, { useEffect, useState } from 'react';
import '../styles/SearchResults.css';
import mockData from '../data/mock_data.json';

const SearchResults = ({ query }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            setLoading(true);

            // Simulate data fetching delay
            setTimeout(() => {
                const filteredResults = mockData.filter((event) =>
                    event.eventName.toLowerCase().includes(query.toLowerCase()) ||
                    event.category.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredResults);
                setLoading(false);
            }, 1000); // Adjust delay as needed
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : results.length > 0 ? (
                <div className="results-grid">
                    {results.map((event, index) => (
                        <div key={index} className="result-card">
                            <img src={event.imageUrl} alt={event.eventName} className="result-image" />
                            <h3>{event.eventName}</h3>
                            <p>{event.location}</p>
                            <p>{event.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
