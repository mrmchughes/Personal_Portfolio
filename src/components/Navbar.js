import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/">Michael Hughes</a>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/about">About</a>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/skills">Skills</a>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/projects">Projects</a>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/contact">Contact</a>
                    </Typography> 
                </Toolbar>    
            </AppBar>           
        </Box>
    )
}

// Watch out that the navbar changes when I scroll down the page past the opening section
// The navbar collapse for a smaller screen

//Use the Responsive App bar with Drawer component so that the navbar collapses for smaller screens
