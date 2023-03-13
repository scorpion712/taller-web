import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Copyright } from './Copyright';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm" style={{justifyContent: 'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
      
        <Typography variant="subtitle1">
          Project code can be found  
          <Link sx={{ml:.5}} color="inherit" href="https://github.com/scorpion712/taller-web">here
          </Link>.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}