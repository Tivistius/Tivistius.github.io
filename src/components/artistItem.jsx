import React from 'react';
import {Avatar, Button, createTheme, Paper, ThemeProvider} from "@mui/material";
import {lime, purple} from "@mui/material/colors";
import { useTranslation } from 'react-i18next';

const ArtistItem = (props) => {
    const { t } = useTranslation();
    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: purple,
        },
    });

    return (
        <Paper className={"shortInfoBox"}> {/* photo + short  desc */}
            <div className={"photo_short"}>
                <Avatar className={"small_photo"} src={`../../images/${props.artist.photo}`} alt={props.artist.fio} />
                <div className={"short_info"}>
                    <div className={"head"}>
                        <h1 className={"thin_text"}>{props.artist.fio}</h1>
                        <h1 className={"thin_text"}>({props.artist.bornDate}-{props.artist.deathDate})</h1>
                    </div>
                    <p className={"shortDescription"}>{props.artist.attribute}</p>
                    <div className={"buttonMore"}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="secondary" href={`#/artist/${props.artist.id}`}>
                                <h1 style={{margin: '0px', fontSize: '1.3vw'}}>{t('more')}</h1>
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default ArtistItem;