import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login-3.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import googleIcon from '../../../images/google-symbol.png'
import { NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

const Login = () => {
      const [loginData, setLoginData] = useState({});


      const handleLoginSubmit = e => {
            alert('hello')
            e.preventDefault();
      }

      const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            console.log(field, value);
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
      }
      return (
            <>
                  <Navbar></Navbar>
                  <Container>
                        <Grid container spacing={2}>
                              <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                                    <Typography variant="body1" style={{ fontSize: "18px", fontWeight: "400", color: "gray" }} gutterBottom>Login
                                    </Typography>

                                    {/* {isLoading && <CircularProgress />
                              } */}
                                    <form>
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Your Email"
                                                type="email"
                                                name="email"
                                                onBlur={handleOnBlur}
                                                variant="standard"
                                          />
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Your Password"
                                                type="password"
                                                name="password"
                                                onBlur={handleOnBlur}
                                                variant="standard"
                                          />

                                          <Button
                                                onClick={handleLoginSubmit}
                                                variant="contained"
                                                sx={{ width: "75%", m: 1 }}
                                                style={{ backgroundColor: '#a5d6a7' }}
                                          >Sign in</Button>

                                          <NavLink style={{ textDecoration: 'none' }}
                                                to="/register"
                                                variant="text">
                                                <Button sx={{ color: '#2e7d32', fontSize: 12 }}
                                                >New user? Please Register</Button>
                                          </NavLink>
                                          {/* {user?.email && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>SuccessFully logged in
                                    </Alert>}
                                    {authError && <Alert severity="error" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>{authError}
                                    </Alert>} */}
                                    </form>

                                    <hr style={{ color: "gray" }} />

                                    <Typography variant="body1" style={{ fontSize: "14px", fontWeight: "500", color: "gray" }} gutterBottom>You Can Also Sign in With:
                                    </Typography>

                                    <Button style={{ width: "16%", }} ><img src={googleIcon} style={{ width: "100%" }} alt="google-icon" /></Button>
                              </Grid>

                              <Grid item xs={12} md={6}>
                                    <img src={login} style={{ width: '95%', marginTop: 10 }} alt="" />
                              </Grid>

                        </Grid>
                  </Container >
            </>
      );
};

export default Login;