import { Alert, Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
      const [email, setEmail] = useState('');
      const [success, setSuccess] = useState(false);
      // const { token } = useAuth();

      const handleOnBlur = e => {
            setEmail(e.target.value);
      }
      const handleAdminSubmit = e => {
            const user = { email };
            
            fetch('https://desolate-springs-66331.herokuapp.com/users/admin', {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then(res => res.json())
                  .then(data => {

                        if (data.modifiedCount) {
                              // console.log(data);
                              setEmail('');
                              setSuccess(true);
                        }
                  })

            e.preventDefault();
      }

      return (
            <div>
                  <Box
                        sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              '& > :not(style)': {
                                    m: 1,
                                    width: "100%",
                                    height: 300
                              },
                        }}
                  >
                        <Paper elevation={5}>
                              <form>
                                    <Typography variant="body1" sx={{ mt: 3 }} style={{fontFamily: 'poppins', fontSize: 20, fontWeight: 700, color: "#a5d6a7"}} gutterBottom>Make New Admin
                                    </Typography>
                                    <hr />
                                    <TextField
                                          sx={{ width: '30%', m: 1 }}
                                          label="Your Email"
                                          type="email"
                                          name="email"
                                          onBlur={handleOnBlur}
                                          variant="standard"
                                    />
                                    <br />
                                    <Button
                                          onClick={handleAdminSubmit}
                                          variant="contained"
                                          sx={{ width: "15%", m: 1 }}
                                          style={{ backgroundColor: '#388e3c',fontFamily: 'poppins',  }}
                                    >Make Admin</Button>
                              </form>
                              {success && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>SuccessFully Made New Admin!
                              </Alert>}

                        </Paper>
                  </Box>
            </div>
      );
};

export default MakeAdmin;