import { Container, Divider, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
// import MuiButton from '../../../StyledComponent/MuiButton';
const useStyle = makeStyles({
      socialIcon: {
            color: '#a5d6a7 !important',
            border: '1px solid #a5d6a7 !important',
            margin: '0px 10px 30px 0 !important',
            '&:hover': {
                  background: '#a5d6a7  !important',
                  color: '#fff !important'
            }
      }
})

const Footer = () => {
      const { socialIcon } = useStyle();
      return (
            <footer>

                  <Container>
                        <Divider />
                        <Grid container spacing={3} sx={{ fontFamily: 'poppins', fontWeight: 700, my: 3 }}>
                              <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <List>
                                          <ListItemText ><Typography sx={{ fontFamily: 'poppins', fontSize: 28, fontWeight: 700, color: "#a5d6a7" }}> WatchBox</Typography></ListItemText>
                                          <ListItemText>
                                                <Typography sx={{ fontFamily: 'poppins', fontSize: 15, fontWeight: 500, color: "gray" }}>WatchBox is the world’s leading platform for the buying, selling, and trading of pre-owned luxury watches; fueled by technology, innovation, and unmatched global experience in the high-end watch market.</Typography>
                                          </ListItemText>


                                    </List>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <List>
                                          <ListItemText ><Typography sx={{mt:2, fontFamily: 'poppins', fontSize: 16, fontWeight: 700, color: "#a5d6a7" }}>Services</Typography>
                                          </ListItemText>
                                          <ListItemText ><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Unrivaled Selection</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Membership Privileges</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Sales Warrenty</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Guaranteed Authenticity</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Extended Care</Typography></ListItemText>
                                         
                                    </List>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <List>
                                    <ListItemText ><Typography sx={{mt:2, fontFamily: 'poppins', fontSize: 16, fontWeight: 700, color: "#a5d6a7" }}>Explore</Typography>
                                          </ListItemText>
                                          <ListItemText ><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Collector’s Journal</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Collections</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>All Watches</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Buying Guide</Typography></ListItemText>

                                          <ListItemText><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 14, fontWeight: 500, color: "gray" }}>Our Team</Typography></ListItemText>

                                    </List>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <List>
                                    <ListItemText ><Typography sx={{mt:2, fontFamily: 'poppins', fontSize: 16, fontWeight: 700, color: "#a5d6a7" }}>Our Address</Typography>
                                          </ListItemText>
                                    <ListItemText ><Typography sx={{mt:2, fontFamily: 'poppins', fontSize: 16, fontWeight: 500, color: "gray" }}>California - 11243 Riverdale</Typography>
                                          </ListItemText>
                                    <ListItemText ><Typography sx={{mt:2, fontFamily: 'poppins', fontSize: 16, fontWeight: 700, color: "#a5d6a7" }}>Contact Number</Typography>
                                          </ListItemText>
                                    <ListItemText ><Typography sx={{mt:1, fontFamily: 'poppins', fontSize: 16, fontWeight: 500, color: "gray" }}>+8801949434546</Typography>
                                          </ListItemText>
                                          
                                          
                                    </List>
                                    <IconButton className={socialIcon}>
                                          <GoogleIcon />
                                    </IconButton>
                                    <IconButton className={socialIcon}>
                                          <TwitterIcon />
                                    </IconButton>
                                    <IconButton className={socialIcon}>
                                          <InstagramIcon />
                                    </IconButton>
                              </Grid>
                        </Grid>
                        <Typography sx={{ textAlign: 'center', py: 4, fontFamily: 'poppins', fontSize: 13, fontWeight: 500, color: "gray" }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
                  </Container>
            </footer>
      );
};

export default Footer;