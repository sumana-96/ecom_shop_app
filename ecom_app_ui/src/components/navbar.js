import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" as={Link} to="/">Home</Button>
            <Button color="inherit" as={Link} to="/Catalogue">Catalogue</Button>
          </Typography>
          <Button color="inherit" as={Link} to="/login">Login</Button>
      </Toolbar>
      </AppBar>
    </Box>   
  );
}