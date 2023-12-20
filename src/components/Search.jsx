    import React, { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faSearch } from '@fortawesome/free-solid-svg-icons';
    import '../styles/Search.css';
    import { useTranslation } from 'react-i18next';
    import {Button, Link} from "@mui/material";
    let text ='';

    function schr(){
        window.location.href = `/#/artistsList/${text}`;
    }

    const Search = () => {

        const { t } = useTranslation();
        const [query, setQuery] = useState('');

        const handleInputChange = (event) => {
            text = event.target.value;
            console.log('sdfsdfsdfds ---', text);
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
                    placeholder={t('Search')}
                />

                <button onClick={schr} type="submit" className="search-btn" >
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>

            </form>

        );
    };

    export default Search;
