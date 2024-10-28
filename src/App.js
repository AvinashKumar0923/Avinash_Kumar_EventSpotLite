import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Services from './components/Services';
import FeaturedEvents from './components/FeaturedEvents';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="App">
            <Navigation onSearch={handleSearch} />
            {searchQuery ? (
                <SearchResults query={searchQuery} />
            ) : (
                <>
                    <Banner />
                    <FeaturedEvents />
                    <Services />
                </>
            )}
            <Footer />
        </div>
    );
};

export default App;
