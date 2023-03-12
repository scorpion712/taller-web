import {
  Alert,
  AppBar,
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
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import ProductContext from "../../context/ProductContext";
import { fetchProducts } from "../services/product.service";
import StickyFooter from "../../components/Footer";
import { TransitionProps } from "@mui/material/transitions";

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

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const handleAddToCartClick = () => {
    console.log("Add to cart");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Typography sx={{ flexGrow: 1 }} variant="h5" component="div">
              Web Store
            </Typography>
          </Container>
          <IconButton size="large" color="inherit" sx={{ mr: 20 }}>
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
                <Grid item xs={12} md={6} lg={4} key={product.id.toString()}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    onClick={() => setOpenDetail(!openDetail)}
                  >
                    <CardHeader
                      title={product.title}
                      subheader={product.category}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={product.thumbnail}
                      alt={product.title}
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
                        {product.stock > 0 ? `$${product.price}` : "no hay mas"}
                      </Typography>
                      3
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
          </>
        )}
      </Container>
      <StickyFooter />
    </>
  );
};
