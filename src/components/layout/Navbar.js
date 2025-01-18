import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import weatherLogo from '../../assets/weather-logo.png';

const Navbar = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: 'none',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Toolbar>
                <img
                    src={weatherLogo}
                    alt="Weather Logo"
                    style={{ height: '40px', marginRight: '16px' }}
                />
                <Typography variant="h6"  sx={{ flexGrow:1, ml: 1, color: 'black' }}>
                    PewnaPogoda.pl
                </Typography>
                <Tabs
                      sx={{
                        color: 'black',
                    }}
                >
                    <Tab label="Pogoda 7 dni" />
                    <Tab label="Pogoda 14 dni" />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
