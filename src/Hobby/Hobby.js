import { Typography } from '@mui/material';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import Videogame from './Videogame';
import './Hobby.css';

function Hobby() {
    const { t, i18n } = useTranslation();
    return (
        <div className='hobbyComponent'>
            <Typography
                variant='h4'
            >
            <strong>{t('hobby.title')}</strong>
            </Typography>
            <Videogame/>
        </div>
    )
}

export default Hobby;