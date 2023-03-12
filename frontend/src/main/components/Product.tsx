import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Product } from "../../models/Product.model";
import CartContext from "../../cart/context/CartContext";
import { addToCart } from "../../cart/services/cart.service";
import { adaptCartItem } from "../adapters/cartItem.adapter";
import { ProductDetail } from "./ProductDetail";

interface ProductDetailProps {
  product: Product;
}

export const ProductComponent = (props: ProductDetailProps) => {
  const { product } = props;
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('0');

  const { dispatch, cartItems } = useContext(CartContext);

  const handleAddToCartClick = (product: Product) => {
    const item = adaptCartItem(product);
    addToCart(dispatch, cartItems, item);
  };

  return (
    <>
      {product.stock > 0 && (
        <Grid item xs={12} md={6} lg={4} key={product.id.toString()}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={product.title} subheader={product.category} />
            <CardMedia
              component="img"
              height="194"
              image={product.thumbnail}
              alt={product.title}
              onClick={() => {
                setOpenDetail(!openDetail);
                setSelectedProductId(product.id);
              }} 
              style={{cursor:'pointer'}}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                sx={{ ml: 2 }}
                style={{ flexGrow: 1 }}
              >
                {`$${product.price}`}
              </Typography>
              <IconButton
                aria-label="add to favorites"
                size="large"
                onClick={() => handleAddToCartClick(product)}
              >
                <AddShoppingCartIcon color="success" />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      )}
      {openDetail && (
        <ProductDetail
          open={openDetail}
          onClose={() => setOpenDetail(false)}
          productId={selectedProductId}
        />
      )}
    </>
  );
};
