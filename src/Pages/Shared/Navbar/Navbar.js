import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static" sx={{ backgroundColor: '#a5d6a7' }}>
                        <Toolbar>
                              <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'poppins', fontSize: 22, fontWeight: 700 }}>
                                    WatchBox
                              </Typography>
                              <Link style={{ textDecoration: "none", color: "white", fontFamily: 'poppins', fontSize: 22, fontWeight: 700 }} to='/home'>
                                    <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Home</Button>
                              </Link>

                              <Link style={{ textDecoration: "none", color: "white" }} to='/explore'>
                                    <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Explore</Button>
                              </Link>

                              <Link style={{ textDecoration: "none", color: "white" }} to='/myOrder'>
                                    <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">My Order</Button>
                              </Link>

                              <Button style={{ textDecoration: "none", color: "white", fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Login</Button>

                        </Toolbar>
                  </AppBar>
            </Box>
      );
};

export default Navbar;