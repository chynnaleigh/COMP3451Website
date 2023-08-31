import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const TopBar = () => {
  const pages = [
    { pageName: "About", link: "/about" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bg-yellow-400" position="static">
        <Toolbar>
          <Link className="grow" to="/">
          <Typography variant="h6">
              Website Title
            </Typography>
          </Link>
          {pages.map((page) => (
            <Link key={page} to={page.link}>
              <Button key={page} color="inherit">{page.pageName}</Button>
            </Link>
          ))}
          <Link to="/login">
            <Button className="ml-8 text-yellow-600" color="inherit" variant="outlined">Login</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;