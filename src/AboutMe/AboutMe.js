import React from 'react';
import { Typography } from '@mui/material';
import { FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import '../App.css';
import './AboutMe.css'

function AboutMe ({ t, i18n }) {
    return (
        <div className="AboutMeComponent">
            <Typography variant="h4">
                <strong>{t('aboutMe.title')}</strong>
            </Typography>
            <Typography 
                variant="body1"
                className="AboutMeDescription"
                align="justify"
                gutterBottom
            >
                {t('aboutMe.description')}
            </Typography>
            <Typography
                variant="body1"
                className="AboutMeDescription"
                align="justify"
                gutterBottom
            >
                {t('aboutMe.descriptionHobby')}
            </Typography>
        </div>
    );
}

export default AboutMe;
