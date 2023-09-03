import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [checkoutToken.id, shippingCountry, shippingSubdivision]);

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          textAlign: "center",
          marginLeft: "12px",
          marginBottom: "20px",
          marginTop: "10px",
          color: "#424242",
          fontSize: "1rem",
        }}
      >
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          style={{ padding: "10px " }}
          onSubmit={methods.handleSubmit((data) =>
            test({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3} className="address__form">
            <input
              required
              name="firstName"
              label="First name"
              placeholder="First name"
              className="address__input"
            />
            <input
              required
              name="lastName"
              label="Last name"
              placeholder="Last name"
              className="address__input"
            />
            <input
              required
              name="address1"
              label="Address line 1"
              placeholder="Address line 1"
              className="address__input"
            />
            <input
              required
              name="email"
              label="Email"
              placeholder="Email"
              className="address__input"
            />
            <input
              required
              name="city"
              label="City"
              placeholder="City"
              className="address__input"
            />
            <input
              required
              name="zip"
              label="Zip / Postal code"
              placeholder="Postal code"
              className="address__input"
            />
            <div className="grid__box">
              <Grid item xs={12} sm={6} className="address__grid">
                <InputLabel
                  style={{
                    marginBottom: "2px",
                    color: "#424242",
                    fontSize: "1rem",
                  }}
                >
                  Shipping Country
                </InputLabel>
                <Select
                  value={shippingCountry}
                  fullWidth
                  onChange={(e) => setShippingCountry(e.target.value)}
                  className="address__select"
                >
                  {Object.entries(shippingCountries)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6} className="address__grid">
                <InputLabel
                  style={{
                    marginBottom: "2px",
                    color: "#424242",
                    fontSize: "1rem",
                  }}
                >
                  Shipping Subdivision
                </InputLabel>
                <Select
                  value={shippingSubdivision}
                  fullWidth
                  onChange={(e) => setShippingSubdivision(e.target.value)}
                  className="address__select"
                >
                  {Object.entries(shippingSubdivisions)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6} className="address__grid">
                <InputLabel
                  style={{
                    marginBottom: "2px",
                    color: "#424242",
                    fontSize: "1rem",
                  }}
                >
                  Shipping Options
                </InputLabel>
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => setShippingOption(e.target.value)}
                  className="address__select"
                >
                  {shippingOptions
                    .map((sO) => ({
                      id: sO.id,
                      label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
                    }))
                    .map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
            </div>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
