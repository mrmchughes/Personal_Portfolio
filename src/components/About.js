import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function About() {
    return (
        <Box>
            <Typography variant="h3" component="div" sx={{ my: 2 }}>
                About Me
            </Typography>

            {/* Picture of me needs to go to the left of the below p element */}
            <Typography component="p">
                Hi, I'm Michael, a Full Stack Developer based in the Newton, MA area. 
                Let's connect to discuss how we can work together.
            </Typography>

            <Typography component="p">
                Here are some of the skills I'm proficient in:
                <Box component="section" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Typography component="p">
                        Front End
                    </Typography>

                    <List>
                        <ListItem>React</ListItem>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>Redux</ListItem>
                    </List>

                </Box>

                <Box component="section" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Typography component="p">
                        Back End
                    </Typography>

                    <List>
                        <ListItem>
                            Node.js
                        </ListItem>
                        <ListItem>
                            Postgres
                        </ListItem>
                        <ListItem>
                            Express.js
                        </ListItem>
                        <ListItem>
                            MongoDB
                        </ListItem>
                    </List>
                </Box>

                <Box component="section" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Typography component="p">
                        Design Tools
                    </Typography>

                    <List>
                        <ListItem>
                            Figma
                        </ListItem>
                        <ListItem>
                            Excalidraw
                        </ListItem>
                    </List>
                </Box>
            </Typography>
        </Box>  
    )
}

// Don't forget to inclue icons for each of the skills listed above