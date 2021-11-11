import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const Service = (props) => {
      const { name, description, img } = props.service;
      return (
            <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mt: 2 }}>
                        <CardMedia
                              component="img"
                              alt="service image"
                              style={{ width: 'auto', height: '90px', margin: '10px auto' }}

                              image={img}
                        />
                        <CardContent>

                              <Typography variant="h5" color="text.secondary" sx={{ fontFamily: 'poppins' }} component="div">
                                    {name}
                              </Typography>

                              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'poppins', mt: 1 }}>
                                    {description}
                              </Typography>
                        </CardContent>
                        <Divider sx={{mt:2}} />

                  </Card>
            </Grid>
      );
};

export default Service;