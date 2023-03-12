import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const MyAppBar = () => {
    const [openCart, setOpenCart] = useState(false);
  return (
    <>
    <AppBar position="static">
    <Toolbar>
      <Container>
        <Typography sx={{ flexGrow: 1 }} variant="h5" component="div">
          Web Store
        </Typography>
      </Container>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setOpenCart(!openCart)}
      >
        <ShoppingCartIcon />
      </IconButton>
      <IconButton size="large" color="inherit" sx={{ mr: 20 }}>
        <PersonIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
      <Drawer
        anchor={"right"}
        open={openCart}
        onClose={() => setOpenCart(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Typography variant="h6">Shoppig Cart</Typography> 
        </Box>
      </Drawer>
      </>
  )
}
