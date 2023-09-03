import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ReactCart } from "../../image/cart.svg";
import logo from "../../image/logo.png";
import css from './Navbar.module.css'

const Navbar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  console.log(totalItems);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary"></Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="container">
      <AppBar position="fixed" className={"appBar"} color="inherit">
        <div className="appBar__container">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={css.logo__title}
              color="inherit"
            >
              <img
                src={logo}
                alt="Shoe Haven"
                className={css.logo__image}
              />
              Shoe Haven
            </Typography>
            <div className={"grow"} />
            {location.pathname === "/" && (
              <div className={"button"}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ReactCart height={25} width={25} />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </div>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navbar;
