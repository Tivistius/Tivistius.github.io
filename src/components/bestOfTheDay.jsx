import React from 'react';
import '../styles/BestOfTheDay.css';
import {Button, ThemeProvider} from "@mui/material";
import { useTranslation } from 'react-i18next';

const BestOfTheDay = (props) => {
    const { t } = useTranslation();
   console.log(props);
    const { fio, bornDate, deathDate, gallery, history, photo, place, shortInfo, youtube } = props.toShow;
    const photoPath = `../images/${photo}`;

    return (
        <div id={"bestOfTheDay"}>
            <div className = 'fullInfo'>
                <h3 className = 'Title'>
                {t('personOfDay')}
                </h3>
                <h3 className = 'Name'>
                    {fio}
                </h3>
                <div className = 'PhotoPart'>
                    <img src={photoPath} alt=":(" className = 'ImageStyle'/>
                    <div className = 'Date'>
                        {bornDate} — {deathDate}
                    </div>
                    <p className={"shortDescription"}>{shortInfo}</p>
                    <div className={"buttonMore"}>
                        <Button href={`#/artist/${props.toShow.id}`} variant="contained" color="secondary" className ='Button'>
                            <h1 style={{margin: '0px',fontSize: '2vw'}}>{t('more')}</h1>
                        </Button>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default BestOfTheDay;