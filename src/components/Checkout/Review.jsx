import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Review = ({ checkoutToken }) => (
  <div style={{ padding: "20px" }}>
    <Typography
      variant="h6"
      gutterBottom
      style={{
        marginLeft: "20px",
        color: "#424242",
        fontSize: "1.5rem",
      }}
    >
      Order summary
    </Typography>
    <List disablePadding>
      {checkoutToken?.line_items?.map((product) => (
        <ListItem style={{ padding: "10px 0" }} key={product.name}>
          <ListItemText
            primary={product.name}
            secondary={`Quantity: ${product.quantity}`}
          />
          <Typography variant="body2">
            {product.line_total.formatted_with_symbol}
          </Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: "10px 0" }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken?.subtotal?.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </div>
);

export default Review;
