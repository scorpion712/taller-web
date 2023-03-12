import {
  Alert, 
  Box, 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  Drawer,
  Grid,
  IconButton,
  Slide, 
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import ProductContext from "../../context/ProductContext";
import { fetchProducts } from "../services/product.service";
import StickyFooter from "../../components/Footer";
import { TransitionProps } from "@mui/material/transitions";
import { MyAppBar } from "../../components/MyAppBar";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MainPage = () => {
  const { dispatch, products, loading, error } = useContext(ProductContext);
  const [openDetail, setOpenDetail] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(0);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const handleAddToCartClick = () => {
    console.log("Add to cart");
  }; 


  return (
    <>
      <CssBaseline />
      <MyAppBar />
      <Drawer
        anchor={"right"}
        open={openCart}
        onClose={() => setOpenCart(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Typography variant="h6">Shoppig Cart</Typography> 
        </Box>
      </Drawer>
      <Container fixed sx={{ mt: 3, mb: 4 }}>
        {loading ? (
          <CircularProgress color="success" />
        ) : error ? (
          <Alert severity="error">
            Something went wrong while loading products
          </Alert>
        ) : (
          <>
            <Grid xs={12} md={12} container spacing={1}>
              {products.map((product) => (
                product.stock > 0 &&
                <Grid item xs={12} md={6} lg={4} key={product.id.toString()}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                      title={product.title}
                      subheader={product.category}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={product.thumbnail}
                      alt={product.title}
                      onClick={() => {setOpenDetail(!openDetail); setSelectedProductId(product.id)}}
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
                        onClick={() => handleAddToCartClick()}
                      >
                        <AddShoppingCartIcon color="success" />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {openDetail && (
              <Dialog
                open={openDetail}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenDetail(false)}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogContent>
                    {`New component to Load product ${selectedProductId} detail`}
                </DialogContent>
              </Dialog>
            )}
          </>
        )}
      </Container>
      <StickyFooter />
    </>
  );
};
