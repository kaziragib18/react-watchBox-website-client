import React from 'react';
import Grid from '@mui/material/Grid';
import bannerImg from '../../../images/banner.jpg';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';

const bannerBg = {
      background: `url(${bg})`,
}

const verticalCenter = {
      display: 'flex',
      minHeight: 450,
      alignItems: 'center',
      justifyContent: 'center'
}

const Banner = () => {
      return (
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                              <Box>
                                    <Typography variant="h4">
                                          Eceptional Timepieces<br />
                                          Authenticty Guarantee
                                    </Typography>
                                    <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                                          From timeless classics to the most innovative independent brands, take your collection to new heights with a selection of exceptional timepieces.
                                    </Typography>
                                    <Button variant="contained" style={{ backgroundColor: '#a5d6a7' }}>Get Appointment</Button>
                              </Box>
                        </Grid>
                        <Grid item xs={12} md={6} style={verticalCenter} >
                              <img style={{ width: '600px', borderRadius: 10 }} src={bannerImg} alt="" />
                        </Grid>

                  </Grid>
            </Container>
      );
};

export default Banner;