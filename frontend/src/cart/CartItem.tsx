import React, { useContext } from "react";
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

import CartContext from "./context/CartContext";
import { removeFromCart } from "./services/cart.service";
import { CartItem }  from "./models/cart.model";

interface CartItemProps {
  item: CartItem;
}

export const CartItemComponent = (props: CartItemProps) => {
  const { item: product } = props;

  const {dispatch, cartItems} = useContext(CartContext);

  const handleDeleteItem = (item: CartItem) => {
    removeFromCart(dispatch, cartItems, item)
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
            <DeleteIcon color='error' />
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
                {product.units + " x"}
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
