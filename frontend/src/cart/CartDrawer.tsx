import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { Product } from "../models/Product.model";
import { CartItem } from "./CartItem";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const products: Product[] = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
];

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

    const cartSubtotal = products.reduce((sum, p) => (sum += p.price), 0).toFixed(2);
    const cartDiscount = products.reduce((sum, p) => (sum += (p.price * p.discountPercentage) / 100), 0).toFixed(2);
    const cartTotal = products.reduce((sum, p) => (sum += p.price * (1 - p.discountPercentage / 100)), 0).toFixed(2);

    const handleCancelOrder = () => {
        console.log('service to clear cart')
        console.log('reload memory stock')
    }

    const handlePurchase = () => {
        console.log('go to checkout page');
    }

  return (
    <Drawer anchor={"right"} open={open} onClose={onClose}>
      <Box sx={{ width: 350 }} role="presentation">
        {products ? (
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
              {products.map((product) => (
                <CartItem key={product.id} item={product} />
              ))}
              <CartSummary
                total={cartTotal}
                subtotal={cartSubtotal}
                discount={cartDiscount}
              />
              <ListItem
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button variant="contained" size="large" onClick={handlePurchase}>
                  Finalizar Compra
                </Button>
              </ListItem>
              <ListItem
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button variant="outlined" color="secondary" size="large" onClick={handleCancelOrder}>
                  Cancelar Compra
                </Button>
              </ListItem>
            </List>
          </>
        ) : (
          <Box
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "1rem",
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
