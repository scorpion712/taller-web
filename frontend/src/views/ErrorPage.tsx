import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError(); 

  return (
    <Box id="error-page" style={{display:'flex', justifyContent: 'center', alignContent:'center', flexDirection: 'column', alignItems:'center', marginTop:'10rem'}}>
      <Typography variant="h1" gutterBottom>Oops!</Typography>
      <Typography variant="h5" >Sorry, an unexpected error has occurred.</Typography>
      <Typography variant="h6" fontStyle={'italic'} gutterBottom color='text.secondary'>{error.statusText || error.message}</Typography>
    </Box>
  );
}