import React from 'react';
import { Typography } from '@mui/material';
import translation from './AboutMeTranslation.js'
import '../App.css';
import './AboutMe.css'

function AboutMe ({ lang }) {
    return (
        <div className="AboutMeComponent">
            <Typography variant="h4">
                <strong>{translation.title[lang]}</strong>
            </Typography>
            <Typography 
                variant="body1"
                className="AboutMeDescription"
                align="justify"
                gutterBottom
            >
                {translation.description[lang]}
            </Typography>
            <Typography
                variant="body1"
                className="AboutMeDescription"
                align="justify"
                gutterBottom
            >
                {translation.descriptionHobby[lang]}
            </Typography>
        </div>
    );
}

export default AboutMe;
