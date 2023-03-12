import { Grid, Rating, Typography } from "@mui/material";
import React from "react";

import { ProductDetail as ProductDetailModel } from "../../models/Product.model";
import { QuantitySelector } from "./QuantitySelector";

interface ProductDetailProps {
  product: ProductDetailModel;
  quantity: number;
  setQuantity: (value: number) => void;
}

export const ProductDetail = (props: ProductDetailProps) => {
  const { product: detailProduct, quantity, setQuantity } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4" component="div">
          {detailProduct.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" color="text.secondary">
          {detailProduct.description}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        style={{ display: "flex", alignSelf: "center" }}
      >
        <Rating precision={0.5} value={detailProduct.rating} />
      </Grid>
      {detailProduct.stock <= 10 && (
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Typography
            component="p"
            variant="h6"
            color="secondary"
            sx={{ ml: 2 }}
          >{`Last ${detailProduct.stock} units!`}</Typography>
        </Grid>
      )}
      <Grid item xs={6} md={2} style={{ display: "flex", alignSelf: "center" }}>
        <Typography
          component="h2"
          variant="h5"
          color="text.primary"
          sx={{ ml: 2 }}
        >{`$${detailProduct.price}`}</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <QuantitySelector value={quantity} onClick={setQuantity} />
      </Grid>
    </Grid>
  );
};
