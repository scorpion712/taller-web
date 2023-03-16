import {
  Alert, 
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Dialog, 
  Slide, 
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useContext, useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { adaptCartItemProductDetail } from "../adapters/cartItem.adapter";
import { ProductDetail } from "./ProductDetail"; 
import CartContext from "../../../components/cart/context/CartContext";
import ProductContext from "../context/ProductContext";

interface ProductDetailProps {
  open: boolean;
  onClose: () => void;
  productId: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const ProductDetailDialog = (props: ProductDetailProps) => {
  const { open, onClose, productId } = props;
  const { 
    loadingDetail,
    errorDetail: error,
    detailProduct,
    fetchProductDetail
  } = useContext(ProductContext); 
  const {
    addToCart: addItemToCart,
    cartItems
  } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductDetail(productId);
  }, [productId]);

  const handleAddToCart = () => {
    addToCart();
    onClose();
  }

  const handlePurchase = () => {
    addToCart();
    console.log(`Go to checkout`);
  }

  const addToCart = () => {
    const cartItem = {...adaptCartItemProductDetail(detailProduct), qty: quantity, units: quantity}
    addItemToCart(cartItems, cartItem)
  } 

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {loadingDetail ? (
        <CircularProgress color="success" />
      ) : error ? (
        <Alert severity="error">
          Something went wrong while loading product detail
        </Alert>
      ) : (
        detailProduct && (
          <Card> 
            <Carousel showThumbs={false} showArrows={false} showStatus={false} autoPlay emulateTouch>
              {detailProduct.images.map((img) => (
                <div key={img}>
                    <img style={{maxHeight: 350}} src={img} alt={detailProduct.title} />
                  </div>
              ))
              } 
            </Carousel> 
              <CardContent>
                <ProductDetail product={detailProduct} quantity={quantity} setQuantity={setQuantity}/>
              </CardContent> 
            <CardActions style={{display:'flex', justifyContent:'flex-end'}}>
              <Button size="medium" color="primary" variant="outlined" onClick={handleAddToCart}>
                Agregar
              </Button>
              <Button size="medium" color="primary" variant="contained" onClick={handlePurchase}>
                Comprar Ahora
              </Button>
            </CardActions>
          </Card>
        )
      )}
    </Dialog>
  );
};
