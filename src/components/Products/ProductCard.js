import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { productsContext } from "../../contexts/ProductContext";
import { checkProductInCart } from "../../helpers/cartFunctions";

import "../../assets/css/Product.css";

const ProductCard = ({ item }) => {
  const { addProductToCart, currentProduct } = useContext(productsContext);

  const { getData } = useContext(productsContext);
  function handleAdd() {
    getData(item, item.id);
  }

  return (
    <Grid item xs={3}>
      <Card>

        <CardMedia
          component="img"
          height="auto"
          image={item.image[0]}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.brand}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "space-around" }}>

          <IconButton
            aria-label="share"
            onClick={() => addProductToCart(item)}
            color={checkProductInCart(item.id) ? "warning" : "primary"}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Button variant="outlined" endIcon={<MoreHorizIcon />}>
            <Link to={`/product/${item.id}`} style={{ color: "inherit" }}>
              Подробнее
            </Link>
          </Button>
        </CardActions>
        <div className="cards">
          <div className="inCart">
            <img className="pict" src={item.img} id={item.id} alt="" />
            <div>{item.firstDescription}</div>
            <div>{item.cost}</div>
            <Link to={`edit/${item.id}`}>
              <Button onClick={handleAdd}>edit</Button>
            </Link>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default ProductCard;
