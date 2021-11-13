import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
      const { user, logOut } = useAuth();
      const theme = useTheme();
      const useStyle = makeStyles({
            navItem: {
                  textDecoration: "none",
                  color: "white",
                  fontFamily: 'poppins',
                  fontSize: 22,
                  fontWeight: 700,
            },
            navIcon: {
                  [theme.breakpoints.up('sm')]: {
                        display: "none !important"
                  }
            },

            navItemContainer: {
                  [theme.breakpoints.down('sm')]: {
                        display: "none !important"
                  }
            },
            drawerItem: {
                  textDecoration: "none",
                  color: "black",
                  fontFamily: 'poppins',
                  fontSize: 15,
                  fontWeight: 800,
            },

      })

      const { navItem, navIcon, navItemContainer, drawerItem } = useStyle()
      const [state, setState] = React.useState(false);

      return (
            <>
                  <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" sx={{ backgroundColor: "#a5d6a7" }}>
                              <Toolbar>
                                    <IconButton
                                          size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="menu"
                                          sx={{ mr: 2 }}
                                          className={navIcon}
                                          onClick={() => setState(true)}
                                    >
                                          <MenuIcon />
                                    </IconButton>

                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'poppins', fontSize: 22, fontWeight: 700, textAlign: 'start' }}>
                                          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>WatchBox</Link>
                                    </Typography>

                                    <Box className={navItemContainer}>
                                          <NavLink className={navItem} to='/home'>
                                                <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700, color: "white" }} color="inherit">Home</Button>
                                          </NavLink>

                                          <NavLink className={navItem} to='/explore'>
                                                <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700, color: "white" }} color="inherit">Explore</Button>
                                          </NavLink>

                                          <NavLink className={navItem} to='/myOrder'>
                                                <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700, color: "white" }} color="inherit">My Order</Button>
                                          </NavLink>

                                          {user?.email ?
                                                <>
                                                      <NavLink className={navItem} style={{ textDecoration: "none", color: "white" }} to="/dashboard">
                                                            <Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Dashboard</Button>
                                                      </NavLink>
                                                      <Button onClick={logOut} style={{ color: "#b71c1c", fontFamily: 'poppins', fontSize: 16, marginBottom: 2, fontWeight: 700 }} color="error">Logout</Button>
                                                </>
                                                :
                                                <NavLink className={navItem} to='/login'>
                                                      <Button style={{ textDecoration: "none", color: "white", fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Login</Button>
                                                </NavLink>
                                          }
                                    </Box>
                              </Toolbar>
                        </AppBar>
                  </Box>
                  <div>
                        <React.Fragment>
                              <Drawer
                                    open={state}
                                    onClose={() => setState(false)}
                              >
                                    <Box sx={{ width: 250 }} role="presentation">
                                          <List>
                                                <ListItem button>
                                                      <ListItemText>
                                                            <Link className={drawerItem} to="/home">HOME</Link>
                                                      </ListItemText>
                                                </ListItem>
                                                <Divider />

                                                <ListItem button>
                                                      <ListItemText> <Link className={drawerItem} to="/explore">EXPLORE</Link></ListItemText>
                                                </ListItem>
                                                <Divider />

                                                <ListItem button>
                                                      <ListItemText>
                                                            <Link className={drawerItem} to="/myOrder">MY ORDER</Link>
                                                      </ListItemText>
                                                </ListItem>
                                                <Divider />

                                                {user?.email ?
                                                      <>
                                                            <ListItem button>
                                                                  <ListItemText>
                                                                        <Link className={drawerItem} to="/dashboard"><Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Dashboard</Button></Link>
                                                                  </ListItemText>
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem button>
                                                                  <ListItemText>
                                                                        <Link className={drawerItem} to="/login"><Button onClick={logOut} style={{ color: "#b71c1c", fontFamily: 'poppins', fontSize: 16, marginBottom: 2, fontWeight: 700 }} color="error">Logout</Button></Link>
                                                                  </ListItemText>
                                                            </ListItem>
                                                      </>
                                                      :
                                                      <ListItem button>
                                                            <ListItemText>
                                                                  <Link className={drawerItem} to="/login"> <Button style={{ textDecoration: "none", color: "dark", fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Login</Button></Link>
                                                            </ListItemText>
                                                      </ListItem>
                                                }
                                          </List>
                                    </Box>
                              </Drawer>
                        </React.Fragment>
                  </div>
            </>
      );
};

export default Navbar;