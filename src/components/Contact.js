import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Contact() {
    return (
        <Box>
            <Typography variant='h4'>Contact</Typography>

            <Box>
               <Typography variant='p'>
                    Write me an e-mail at:
               </Typography>
               <Typography variant='p'>
                    mrmchughes27@gmail.com
                </Typography>
            </Box>

            <Typography variant='h5'> Or </Typography>

            <Box>
                <Typography variant='p'>
                    Reach out to me on social media:
                </Typography>
                <Box>
                    <a>Github Icon Link to my profile here</a>
                    <a>LinkedIn Icon Link to my profile here</a>
                </Box>
            </Box>
            {/* <Typography variant='p'>Reach me on social media </Typography>

            <Typography variant='p'>Phone: 804-930-2399</Typography>
            <Typography variant='p'>Email: mrmchughes27@gmail.com</Typography>
            <Typography variant='p'>LinkedIn: https://www.linkedin.com/in/mhughes27</Typography> */}
        </Box>
    );
}

// Definitely taking some inspiration from Pedro's Portfolio Contact Section here