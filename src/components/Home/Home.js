import { Grid } from "@mui/material";
import React from "react";
import Content from "./Content";
import "../../assets/css/Home.css";
import Sidebar from "./Sidebar";
import { Carousel } from "react-bootstrap";
// import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.chanel.com/emea/img/prd-emea/sys-master/content/hb2/hcf/9324790349854"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ask for the moon*</h3>
            <p>Лимитированные продукты N°5.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.chanel.com/emea/img/prd-emea/sys-master/content/hb2/hcf/9324790349854"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Grid container spacing={3}>
        <Content />
        <Sidebar />
      </Grid>
    </div>
  );
};

export default Home;
