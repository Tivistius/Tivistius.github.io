import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import '../styles/Header.css';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <nav>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" className="roundedButtonGroup">
                    <Button href={"/#"} id='ButtonStyle'>{t('home')}</Button>
                    <Button href={"/#/#bestOfTheDay"} id='ButtonStyle'>{t('personOfDay')}</Button>
                    <Button href={"/#/artistsList"} id='ButtonStyle'>{t('persons')}</Button>
                    <Button href={"/#/#about"} id='ButtonStyle'>{t('aboutUs')}</Button>
                </ButtonGroup>
            </nav>
        </header>
    );
};

export default Header;
