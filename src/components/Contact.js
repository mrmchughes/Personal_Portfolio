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
                    <a href='https://github.com/mrmchughes'>Github Icon Link to my profile here</a>
                    <a href='https://www.linkedin.com/in/mhughes27'>LinkedIn Icon Link to my profile here</a>
                </Box>
            </Box>
        </Box>
    );
}

// Definitely taking some inspiration from Pedro's Portfolio Contact Section here