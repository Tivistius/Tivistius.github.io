import React from 'react';

const GoogleMap = ({link}) => {
    return (
        <iframe
            className = "MapContainer"
            style={{
                marginTop: "1em",
                border: '0',
                boxShadow: '-moz-initial',
                WebkitBoxShadow: '5px 6px 50px grey',
                marginBottom:'40px',
            }}
            width= "70%"
            height="80%"
            src = {link}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    );
};

export default GoogleMap;