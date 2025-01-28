import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import weatherLogo from '../../assets/weather-logo.png';

const Navbar = ({ activeTab, onTabChange, isDay }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const tabStyles = {
        color: isDay ? 'black' : 'white',
        minWidth: isMobile ? '70px' : '90px',
        padding: isMobile ? '6px' : '12px 16px',
        fontSize: isMobile ? '0.8rem' : '0.9rem'
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: 'none',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                margin: isMobile ? '5px' : '10px',
            }}
        >
            <Toolbar sx={{ 
                flexDirection: isMobile ? 'column' : 'row', 
                padding: isMobile ? '8px' : '16px',
                justifyContent: 'space-between', // Dodane
                alignItems: isMobile ? 'center' : 'center', // Dodane
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    width: isMobile ? '100%' : 'auto',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    marginBottom: isMobile ? '8px' : 0
                }}>
                    <img
                        src={weatherLogo}
                        alt="Weather Logo"
                        style={{ 
                            height: isMobile ? '30px' : '40px', 
                            marginRight: '8px' 
                        }}
                    />
                    <Typography 
                        variant={isMobile ? "subtitle1" : "h6"} 
                        sx={{ 
                            color: isDay ? 'black' : 'white',
                            fontSize: isMobile ? '1.1rem' : '1.25rem'
                        }}
                    >
                        PewnaPogoda.pl
                    </Typography>
                </Box>
                <Tabs
                    value={activeTab}
                    onChange={(e, newValue) => onTabChange(newValue)}
                    variant="scrollable"
                    scrollButtons={isMobile ? "auto" : false}
                    sx={{
                        minHeight: isMobile ? '40px' : '48px',
                        '& .MuiTabs-indicator': {
                            backgroundColor: isDay ? 'black' : 'white'
                        },
                        marginLeft: 'auto',
                        width: isMobile ? '100%' : 'auto',
                    }}
                >
                    <Tab label="Dziś" value="current" sx={tabStyles} />
                    <Tab label="7 dni" value="7days" sx={tabStyles} />
                    <Tab label="14 dni" value="14days" sx={tabStyles} />
                </Tabs> 
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
