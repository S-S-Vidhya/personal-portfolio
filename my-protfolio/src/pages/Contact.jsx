import React from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import contact from '../assets/contact.png'
import './Contact.css'

const Contact = () => {
  return (
    <Container>
      <Box className="contact-container" sx={{mb:5}}>
        <Typography sx={{ mb: 4, mt: 4, color: '#7303c0', textAlign: 'center', fontWeight: 700, fontSize: '35px', animation: 'fadeIn 1s' }}>
          Contact
        </Typography>

        <Grid container spacing={0} sx={{ padding: 2, animation: 'fadeIn 1.5s' }}>
          <Grid item xs={12} md={6}>
            <img src={contact} alt="Contact Image" style={{ width: '100%', height: '100%', borderRadius: '30px 0 0 30px', animation: 'zoomIn 2s' }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2, backgroundColor: '#white', borderRadius: 2, borderLeft: '1px solid #fff', animation: 'fadeIn 1.5s' }}>
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color='info'
                  required
                  sx={{ animation: 'fadeIn 1.5s' }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color='info'
                  required
                  sx={{ animation: 'fadeIn 1.5s' }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color='info'
                  multiline
                  rows={4}
                  required
                  sx={{ animation: 'fadeIn 1.5s' }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 2, backgroundColor: "#7303c0", color: 'white', animation: 'fadeIn 1.5s',
                    '&:hover': {
                      backgroundColor: "#5c2e8f",
                      transform: 'scale(1.05)',
                      transition: 'all 0.3s ease-in-out',
                    },
                   }}
                >
                  Send Message
                </Button>
              </form>
              <Box sx={{ mt: 2, textAlign: 'center', animation: 'fadeIn 1.5s' }}>
                <Link href="https://www.linkedin.com/in/vidhya-vidhya-195b22235" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                  <LinkedInIcon />
                </Link>
                <Link href="tel:+91-7358249690" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                  <PhoneIcon />
                </Link>
                <Link href="mailto:vidhyaselavn10012004@gmail.com" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                  <EmailIcon sx={{ color: '#3498db' }} />
                </Link>
                <Link href="https://github.com/vidhyaselvan" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                  <GitHubIcon sx={{ color: 'black' }} />
                </Link>
                <Link href="https://www.instagram.com/vidhyaselvan/" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                  <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" style={{ width: 24, height: 24 }} />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;