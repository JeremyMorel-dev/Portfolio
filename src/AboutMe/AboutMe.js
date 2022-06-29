import React from 'react';
import { Typography } from '@mui/material';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import '../App.css';
import './AboutMe.css'

function AboutMe () {
    const { t, i18n } = useTranslation();
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
