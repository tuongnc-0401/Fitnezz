import { Box, Container, Grid, TextField, Typography, Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import React from 'react'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Box>
                <Container maxWidth="xl">
                    <Grid container direction="row" justifyContent="space-evenly" >
                        <Grid style={{ color: "white" }} container justifyContent="center" item xs={12} sm={4}>
                            <Box style={{ width: "70%" }}>
                                <Box mb={1} style={{ fontWeight: "bold", fontSize: "medium" }} >About Us</Box>
                                <Typography variant="body1" style={{ color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</Typography>
                                <Box component="span">
                                    <ListItem>
                                        <ListItemIcon><FacebookIcon /></ListItemIcon>
                                        <ListItemIcon><YouTubeIcon /></ListItemIcon>
                                        <ListItemIcon><InstagramIcon /></ListItemIcon>
                                    </ListItem>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid style={{ color: "white" }} container justifyContent="center" item xs={12} sm={4}>
                            <Box>
                                <Box mb={1} style={{ fontWeight: "bold", fontSize: "medium" }}>Contact Info</Box>
                                <Box >
                                    <Box>
                                        <Typography variant="body1" style={{ color: "grey" }}>
                                            Address:
                                        </Typography>
                                        <Typography variant="body1">
                                            37 Pham Ngu Lao, Phuong 3, Go Vap
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" style={{ color: "grey" }}>
                                            Telephone:
                                        </Typography>
                                        <Typography variant="body1">
                                            +84 931855308
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" style={{ color: "grey" }}>
                                            Email:
                                        </Typography>
                                        <Typography variant="body1">
                                            nct@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid style={{ color: "white" }} container justifyContent="flex-start" item xs={12} sm={4}>
                            <Box style={{ paddingLeft: "100px" }}>
                                <Box mb={1} style={{ fontWeight: "bold", fontSize: "medium" }}>Quick Links</Box>
                                <Box >
                                    <Box>
                                        <Link className={classes.pink} href="#">About</Link>
                                    </Box>
                                    <Box>
                                        <Link className={classes.pink} href="#">Terms of Use</Link>
                                    </Box>
                                    <Box>
                                        <Link className={classes.pink} href="#">Disclaimers</Link>
                                    </Box>
                                    <Box>
                                        <Link className={classes.pink} href="#">Contact</Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box mt={5}>
                <Typography variant="body1" className={classes.pink} align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://www.youtube.com/channel/UCJlGqX5vRrletRQphYSNztQ">
                        FITNEZZ
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </footer >
    )
}

export default Footer
