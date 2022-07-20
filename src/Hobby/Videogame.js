import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import './Hobby.css';

import osuLogo from './hobbyAsset/osulogo.png'

function Videogame() {
    const { t, i18n } = useTranslation();
    return (
        <div className='videogameComponent'>
            <Typography
                variant='h5'
            >
            <strong>{t('hobby.videogames.title')}</strong>
            </Typography>
            <Typography
                variant='body1'
            >
                {t('hobby.videogames.introduction')}
            </Typography>
            <div className='osuComponent'>
                <Grid container align="center" justify="center">
                    <Grid item xs={12} sm={1} align="center" justify="center">
                        <img src={osuLogo} alt="osu! Logo" className='osulogo'/>
                    </Grid>
                    <Grid container xs={12} sm={11}>
                        <Typography
                            variant='body1'
                            className='osuText'
                            align='justify'
                            justify="center"
                        >
                            {t('hobby.videogames.osu')}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Videogame;