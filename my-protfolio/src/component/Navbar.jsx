import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#7303c0',boxShadow:'box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15)',padding:' padding: 0 20px',
      borderBottom:'1px solid rgba(5, 4, 4, 0.18)'}}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1,  color:'white', animation: 'fadeIn 2s ease-out',fontWeight: '100', fontSize: '1.5rem' }}>
          VIDHYA
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ ml: 'auto', display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', sm: 'block', color:'#white' } }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 ,color:'white', fontSize:'1.5rem' }}>
            Vidhya
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button color="inherit" component={Link} to="/" sx={{ my: 1 }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ my: 1 }}>
              About
            </Button>
            <Button color="inherit" component={Link} to="/resume" sx={{ my: 1 }}>
              Resume
            </Button>
            <Button color="inherit" component={Link} to="/projects" sx={{ my: 1 }}>
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ my: 1 }}>
              Contact
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;