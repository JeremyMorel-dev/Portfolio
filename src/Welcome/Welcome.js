import { Typography } from '@mui/material';
import translation from './WelcomeTranslation';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import '../App.css';
import './Welcome.css';

function Welcome ({ lang }) {
    return (
    <AppBar 
        position="fixed"
        color="inherit"
        className="welcomeComponent"
    >
      <Container maxWidth="xl">
            <Typography
                variant='h5'
                align='center'
            >
                {translation.welcome[lang]}
            </Typography>
            <Typography
                variant='body2'
                align='center'
                fontSize={12}
            >
                {translation.firstLine[lang]}
            </Typography>
      </Container>
    </AppBar>
    )
}

export default Welcome;