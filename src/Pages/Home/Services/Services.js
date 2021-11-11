import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import serviceIcon from '../../../images/service-Icon.png';
import membership from '../../../images/member-card.png';
import warrenty from '../../../images/guarantee.png';

const services = [
      {
            name: 'Expert Services',
            description: 'Our in-house team of Swiss-trained watchmakers and refinishers are among the best in the industry. From routine maintenance to heavy water damage, our team of experts provide full support with factory-sourced parts for first-class service to the secondary marketplace.',
            img: serviceIcon
      },
      {
            name: 'Membership Privileges',
            description: 'Sign in with our membership plan & enjoy in purchase discount in your future parcheases as well as free services from our experts. Access to a team of over 160 watch-lovers ready to share their passion with you. Ask them anything, from watch history to the pulse of the market.',
            img: membership
      },
      {
            name: 'Sales Warrenty',
            description: 'WatchBox is committed to providing industry-leading pre-owned timepieces without compromise. Therefore, each watch purchased or serviced through WatchBox is covered by either an OEM warranty or by the WatchBox 2 Years Limited Warranty, unless otherwise described herein.',
            img: warrenty
      }
]

const Services = () => {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <Container>
                        <Typography sx={{ fontWeight: 600, m: 2, color: '#a5d6a7', fontFamily: 'poppins' }} variant="h6" component="div">
                              Services We Provide
                        </Typography>
                        <Divider /> 

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {
                                    services.map(service => <Service
                                          key={service.name}
                                          service={service}
                                    ></Service>)
                              }
                        </Grid>
                  </Container>
            </Box>
      );
};

export default Services;