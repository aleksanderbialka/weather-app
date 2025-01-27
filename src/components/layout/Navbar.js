import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import weatherLogo from '../../assets/weather-logo.png';

const Navbar = ({ activeTab, onTabChange, isDay }) => {
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
                <Typography variant="h6" sx={{ flexGrow: 1, ml: 1, color: isDay ? 'black' : 'white' }}>
                    PewnaPogoda.pl
                </Typography>
                <Tabs
                    value={activeTab}
                    onChange={(e, newValue) => onTabChange(newValue)}
                >
                    <Tab label="Dziś" value="current" sx={{color: isDay ? 'black' : 'white'}} />
                    <Tab label="7 dni" value="7days" sx={{color: isDay ? 'black' : 'white'}}/>
                    <Tab label="14 dni" value="14days" sx={{color: isDay ? 'black' : 'white'}} />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
