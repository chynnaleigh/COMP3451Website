import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const TopBar = ({pages}) => {
  console.log("pages", pages);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Website Title
          </Typography>
          {pages.map((page) => (
            <Button color="inherit">{page.pageName}</Button>
          ))}
          {pages.map((page) => (
            <Button color="inherit">{page.pageName}</Button>
          ))}
          {pages.map((page) => (
            <Button color="inherit">{page.pageName}</Button>
          ))}
          <Button className="ml-8 text-yellow-400" color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;