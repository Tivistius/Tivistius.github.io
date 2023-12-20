import React from 'react';
import '../styles/SearchSection.css';
import Button from '@mui/material/Button';
import Search from './Search';
import { useTranslation} from 'react-i18next';
import i18n from '../i18n';


const SearchSection = () => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <div className= 'SearchSection'>
            <a className="a" href="/your-route">
                <img className="Logo"
                    src="/images/logo.png"
                    alt=":("
                />
            </a>

            <div className= 'SearchContainer'>
                <div className= 'LanguageChanger'>
                    <Button onClick={() => changeLanguage('en')} variant="contained" style={{ width: '22%', height: '90%', fontSize: '2.1vw', padding: '0', minWidth: '0', minHeight: '0', borderRadius: '2vw' }}>Eng</Button>
                    <Button onClick={() => changeLanguage('ru')} variant="contained" style={{ width: '22%', height: '90%', fontSize: '2.1vw', padding: '0', minWidth: '0', minHeight: '0', borderRadius: '2vw'}}>Рус</Button>
                </div>

                <Search>
                </Search>
            </div>
        </div>

    );
};

export default SearchSection;