import { Typography } from '@mui/material';
import translation from './WelcomeTranslation'
import '../App.css';
import './Welcome.css';

function Navbar ({ lang }) {
    return (
        <div className='WelcomeComponent'>
            <Typography
                variant='h4'
            >
                <strong>{translation.welcome[lang]}</strong>
            </Typography>
            <Typography
                variant='body1'
            >
                {translation.firstLine[lang]}
            </Typography>
        </div>
    )
}

export default Navbar;