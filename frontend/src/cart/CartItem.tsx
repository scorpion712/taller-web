import React from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Product } from "../models/Product.model";

interface CartItemProps {
  item: Product;
}

export const CartItem = (props: CartItemProps) => {
  const { item: product } = props;

  const handleDeleteItem = (item: Product) => {
    console.log("Service to delete " + item.id);
  };

  return (
    <React.Fragment key={product.id}>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDeleteItem(product)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar
            alt={product.title}
            src={product.thumbnail}
            variant="rounded"
          />
        </ListItemAvatar>
        <ListItemText
          primary={product.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {product.stock + " x"}
                {`$${product.price}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};
