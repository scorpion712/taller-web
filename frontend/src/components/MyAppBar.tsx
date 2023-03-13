import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import CartContext from "./cart/context/CartContext";
import { CartDrawer } from "./cart/CartDrawer";

export const MyAppBar = () => {
  const [openCart, setOpenCart] = useState(false);

  const { cartItems } = useContext(CartContext);

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
            <Badge badgeContent={cartItems.reduce((t,i) => t += i.units,0)} color="error">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ mr: 20 }}>
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
};
