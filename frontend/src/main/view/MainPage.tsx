import {
  Alert,  
  CircularProgress,
  Container,
  CssBaseline, 
  Grid,  
} from "@mui/material";
import React, { useContext, useEffect } from "react";

import ProductContext from "../../context/ProductContext";
import { fetchProducts } from "../services/product.service";
import StickyFooter from "../../components/Footer"; 
import { MyAppBar } from "../../components/MyAppBar";
import { ProductDetail } from "../components/ProductDetail";

export const MainPage = () => {
  const { dispatch, products, loading, error } = useContext(ProductContext); 

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]); 

  return (
    <>
      <CssBaseline />
      <MyAppBar />
      <Container fixed sx={{ mt: 3, mb: 4 }}>
        {loading ? (
          <CircularProgress color="success" />
        ) : error ? (
          <Alert severity="error">
            Something went wrong while loading products
          </Alert>
        ) : ( 
            <Grid xs={12} md={12} container spacing={1}>
              {products.map((product) => (
                <ProductDetail product={product}  />
              ))}
            </Grid>  
        )}
      </Container>
      <StickyFooter />
    </>
  );
};
