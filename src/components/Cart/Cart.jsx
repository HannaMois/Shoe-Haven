import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import shoe1 from "../../image/shoe1.png";
import shoe2 from "../../image/shoe2.png";
import { ReactComponent as ReactCircle } from "../../image/circle.svg";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <>
      <Typography variant="subtitle1" 
      style={{textAlign: 'center', marginTop: "10px", marginBottom: "10px", color: '#424242', fontSize: '2rem' }}
      >
        You have no items in your shopping cart,&nbsp;
        <Link className={"link"} to="/"
        style={{ color: '#15a9fc'}}
        >
          start adding some
        </Link>
        !
      </Typography>
      <div className="empty__box">
        <ReactCircle className="empty__circle" />
        <img src={shoe1} alt="shoe" className="empty__img" />
        <img src={shoe2} alt="shoe" className="empty__img" />
      </div>
    </>
  );

  if (!cart.line_items) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={"cardDetails"}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div style={{display: 'flex', gap: 10}}>
          <Button
            className={"emptyButton"}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={"checkoutButton"}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="container">
    <Container>
      <div className={"toolbar"} />
      <Typography
        className={"title"}
        variant="h3"
        gutterBottom
        style={{textAlign: 'center', marginTop: "100px", color: '#15a9fc', fontSize: '3rem', fontWeight: '700' }}
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
    </div>
  );
};

export default Cart;
