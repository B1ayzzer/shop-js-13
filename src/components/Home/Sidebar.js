import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { productsContext } from "../../contexts/ProductContext";
import history from "../../helpers/history";
import RangeSlider from "./RangeSlider";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const { getProducts } = useContext(productsContext);
  const [brand, setBrand] = useState(getBrand());

  function getBrand() {
    const search = new URLSearchParams(history.location.search);
    return search.get("brand");
  }

  function handleChangeBrand(e) {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("brand")}`);
      getProducts();
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("brand", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(search.toString());
    setBrand(e.target.value);
  }

  return (
    <Grid item md={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper>
          <FormLabel component="legend">brand</FormLabel>
          <RadioGroup
            value={brand}
            onChange={handleChangeBrand}
            aria-label="brand"
            name="brand1"
          >
            <FormControlLabel value="Chanel" control={<Radio />} label="Chanel" />
            <FormControlLabel value="Versace" control={<Radio />} label="Versace" />
            <FormControlLabel value="Dior" control={<Radio />} label="Dior" />
            <FormControlLabel value="Gucci" control={<Radio />} label="Gucci" />
            <FormControlLabel value="Boss" control={<Radio />} label="Boss" />
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>

        <hr />
        <h3 style={{ marginLeft: "20px" }}> Price</h3>
          <RangeSlider />
      </Paper>
        </AccordionDetails>
      </Accordion>
      
    </Grid>
  );
};

export default Sidebar;
