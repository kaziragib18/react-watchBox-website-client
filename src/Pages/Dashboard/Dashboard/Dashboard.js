import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import DashboardHome from '../DashboardHome/DashboardHome';
// import useAuth from './../../../hooks/useAuth';
// import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';

const drawerWidth = 205;

function Dashboard(props) {
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      let { path, url } = useRouteMatch();

      // const { admin } = useAuth();

      const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
      };

      const drawer = (
            <div>
                  <Toolbar />
                  <Divider />
                  <Link style={{ textDecoration: "none", color: "gray" }} to="/home">
                        <Button color="inherit" sx={{ px: 10, py: 2, fontWeight: 700, fontSize:12 }}>Home</Button>
                  </Link>

                  <Link style={{ textDecoration: "none", color: "gray" }} to="/explore">
                        <Button color="inherit" sx={{ px: 7, py: 2, fontWeight: 700, fontSize:12 }}>Explore</Button>
                  </Link>
                  
                  <Link style={{ textDecoration: "none", color: "gray" }} to="/addReview">
                        <Button color="inherit" sx={{ px: 7, py: 2, fontWeight: 700,fontSize:12 }}>Add Review</Button>
                  </Link>

                  <Divider />

                  {/* <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}`}>
                        <Button color="inherit" sx={{ px: 7, py: 2, fontWeight: 700 }}>Dashboard</Button>
                  </Link> */}

                  {/* {admin &&  */}
                  <Box>
                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/makeAdmin`}>
                              <Button color="inherit" sx={{ px: 7, py: 2, fontWeight: 700, fontSize:12 }}>Make Admin</Button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/addProduct`}>
                              <Button color="inherit" sx={{ px: 5, py: 2, fontWeight: 700, fontSize:12 }}>Add Product</Button>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/manageProducts`}>
                              <Button color="inherit" sx={{ px: 4, py: 2, fontWeight: 700, fontSize:12 }}>Manage Products</Button>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/manageOrder`}>
                              <Button color="inherit" sx={{ px: 4, py: 2, fontWeight: 700, fontSize:12 }}>Manage Order</Button>
                        </Link>
                  </Box>
                  {/* } */}


                  {/* <List >
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                              <ListItem button key={text}>
                                    <ListItemIcon>
                                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                              </ListItem>
                        ))}
                  </List> */}
            </div>
      );

      const container = window !== undefined ? () => window().document.body : undefined;

      return (
            <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <AppBar
                        position="fixed"
                        sx={{
                              width: { sm: `calc(100% - ${drawerWidth}px)` },
                              ml: { sm: `${drawerWidth}px` },
                        }}
                  >
                        <Toolbar style={{ backgroundColor: "#a5d6a7" }} >
                              <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" noWrap component="div">
                                    Dashboard
                              </Typography>
                        </Toolbar>
                  </AppBar>
                  <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                  >
                        <Drawer
                              container={container}
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                              ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                              }}
                              sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                        >
                              {drawer}
                        </Drawer>
                        <Drawer
                              variant="permanent"
                              sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                              open
                        >
                              {drawer}
                        </Drawer>
                  </Box>
                  <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                  >
                        <Toolbar />

                        <Switch>
                              
                              {/* <Route exact path={path}>
                                    <DashboardHome></DashboardHome>
                              </Route> */}

                              {/* <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                              </AdminRoute> */}

                              {/* <AdminRoute path={`${path}/addDoctor`}>
                                    <AddDoctor></AddDoctor>
                              </AdminRoute> */}

                        </Switch>

                  </Box>
            </Box>
      );
}

Dashboard.propTypes = {
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
};

export default Dashboard;