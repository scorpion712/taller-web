import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";

import { CartItemComponent } from "./CartItem";
import CartContext from "./context/CartContext"; 
import { clearCart } from "./services/cart.service";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartSummary = ({ total, subtotal, discount }: any) => {
  return (
    <>
      <ListItem sx={{ mt: 2 }} style={{ justifyContent: "flex-end" }}>
        <Typography
          variant="h5"
          align="right"
          color="text.primary"
        >{`SubTotal: $${subtotal}`}</Typography>
      </ListItem>
      <ListItem style={{ justifyContent: "flex-end" }}>
        <Typography
          variant="h5"
          align="right"
          color="text.primary"
        >{`Descuento: $${discount}`}</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem sx={{ mb: 3, mt: 2 }} style={{ justifyContent: "flex-end" }}>
        <Typography
          variant="h4"
          align="right"
          color="text.primary"
        >{`Total: $${total}`}</Typography>
      </ListItem>
    </>
  );
};

export const CartDrawer = (props: CartDrawerProps) => {
  const { open, onClose } = props;

  const { dispatch, cartItems } = useContext(CartContext);

  const cartSubtotal = cartItems
    .reduce((sum, p) => (sum += p.price), 0)
    .toFixed(2);
  const cartDiscount = cartItems
    .reduce((sum, p) => (sum += (p.price * p.discountPercentage) / 100), 0)
    .toFixed(2);
  const cartTotal = cartItems
    .reduce((sum, p) => (sum += p.price * (1 - p.discountPercentage / 100)), 0)
    .toFixed(2);

  const handleCancelOrder = () => {
    clearCart(dispatch);
  };

  const handlePurchase = () => {
    console.log("go to checkout page");
  }; 

  return (
    <Drawer anchor={"right"} open={open} onClose={onClose}>
      <Box sx={{ width: 350 }} role="presentation">
        {cartItems.length > 0 ? (
          <>
            <Box
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "1rem",
              }}
            >
              <Typography variant="h5">Shopping Cart</Typography>
            </Box>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {cartItems.map((product) => (
                <CartItemComponent key={product.id} item={product} />
              ))}
              <CartSummary
                total={cartTotal}
                subtotal={cartSubtotal}
                discount={cartDiscount}
              />
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePurchase}
                >
                  Finalizar Compra
                </Button>
              </ListItem>
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  onClick={handleCancelOrder}
                >
                  Cancelar Compra
                </Button>
              </ListItem>
            </List>
          </>
        ) : (
          <Box
            style={{
              justifyContent: "center",
              alignItems: 'center',
              alignContent: 'center',
              display: "flex",
              marginTop: "1rem",
              marginLeft: "2rem",
            }}
          >
            <Typography variant="h5">
              You have no items in the Shopping Cart
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};
