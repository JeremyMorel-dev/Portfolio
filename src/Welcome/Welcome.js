import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import './Welcome.css';

function Welcome ({ t, i18n }) {
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
                {t('welcome.welcome')}
            </Typography>
            <Typography
                variant='body2'
                align='center'
                fontSize={12}
            >
                {t('welcome.firstLine')}
            </Typography>
      </Container>
    </AppBar>
    )
}

export default Welcome;