    import React, { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faSearch } from '@fortawesome/free-solid-svg-icons';
    import '../styles/Search.css'; // Подключение файла стилей для кнопки

    const Search = () => {
        const [query, setQuery] = useState('');

        const handleInputChange = (event) => {
            setQuery(event.target.value);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Search Query:', query);
        };

        return (
            <form onSubmit={handleSubmit} style={{justifyContent:'center'}} className="search-container">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search..."
                />
                <button type="submit" className="search-btn">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>
            </form>

        );
    };

    export default Search;