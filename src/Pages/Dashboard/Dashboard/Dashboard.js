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
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from './../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import ManageProducts from '../../ManageProducts/ManageProducts';
// import ManageOrder from '../../ManageOrder/ManageOrder';
import MyOrder from '../../MyOrder/MyOrder';
import Payment from '../../Payment/Payment';
import AddReview from '../../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardHome from '../../Dashboard/DashboardHome/DashboardHome';
import userIcon from '../../../images/userIcon-2.png';
import logout from '../../../images/logout.png';

const drawerWidth = 205;

function Dashboard(props) {
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      let { path, url } = useRouteMatch();

      const { admin, user, logOut } = useAuth();

      const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
      };

      const drawer = (
            <div>
                  <Toolbar />
                  <Divider />
                  <Link style={{ textDecoration: "none", color: "gray" }} to="/home">
                        <Button color="inherit" sx={{ px: 6, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Home</Button>
                  </Link>

                  <Link style={{ textDecoration: "none", color: "gray" }} to="/explore">
                        <Button color="inherit" sx={{ px: 7, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Explore</Button>
                  </Link>
                  <Divider />

                  <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/myOrder`}>
                        <Button color="inherit" sx={{ px: 6, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>My Order</Button>
                  </Link>


                  <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/addReview`}>
                        <Button color="inherit" sx={{ px: 6, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Add Review</Button>
                  </Link>

                  <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/payment`}>
                        <Button color="inherit" sx={{ px: 7, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Payment</Button>
                  </Link>


                  {/* <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}`}>
                        <Button color="inherit" sx={{ px: 7, py: 2, fontWeight: 700, fontSize:12  }}>Dashboard</Button>
                  </Link> */}

                  {admin && <Box>
                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/makeAdmin`}>
                              <Button color="inherit" sx={{ px: 5, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Make Admin</Button>
                        </Link>

                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/addProduct`}>
                              <Button color="inherit" sx={{ px: 5, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Add Product</Button>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/manageProducts`}>
                              <Button color="inherit" sx={{ px: 2, py: 2, fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>Manage Products</Button>
                        </Link>

                        {/* <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/manageOrder`}>
                              <Button color="inherit" sx={{ px: 4, py: 2, fontWeight: 700, fontSize: 12 }}>Manage Order</Button>
                        </Link> */}
                  </Box>
                  }

                  <Divider />

                  <Typography style={{ color: "#212121", fontFamily: 'poppins', fontSize: 16, marginTop: 20, marginBottom: 10, fontWeight: 700 }} color="error"><img style={{ width: '10%', marginBottom: 5, marginRight: 10 }} src={userIcon} alt="" /> {user.displayName}</Typography>


                  <Link style={{ textDecoration: "none", color: "gray" }} to={`${url}/`}>
                        <Button onClick={logOut} style={{ color: "#b71c1c", fontFamily: 'poppins', fontSize: 14, marginBottom: 2, fontWeight: 700 }} color="error"><img style={{ width: '10%', marginBottom: 1, marginRight: 10 }} src={logout} alt="" />Logout</Button>
                  </Link>


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

                              <Route exact path={path}>
                                    <DashboardHome></DashboardHome>
                              </Route>

                              <Route path={`${path}/myOrder`}>
                                    <MyOrder></MyOrder>
                              </Route>

                              <Route path={`${path}/addReview`}>
                                    <AddReview></AddReview>
                              </Route>

                              <Route path={`${path}/payment`}>
                                    <Payment></Payment>
                              </Route>

                              <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                              </AdminRoute>

                              <AdminRoute path={`${path}/addProduct`}>
                                    <AddProduct></AddProduct>
                              </AdminRoute>

                              <AdminRoute path={`${path}/manageProducts`}>
                                    <ManageProducts></ManageProducts>
                              </AdminRoute>

                              <AdminRoute path={`${path}/addProduct`}>
                                    <AddProduct></AddProduct>
                              </AdminRoute>

                              {/* <Route path={`${path}/manageOrder`}>
                                    <ManageOrder></ManageOrder>
                              </Route> */}

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