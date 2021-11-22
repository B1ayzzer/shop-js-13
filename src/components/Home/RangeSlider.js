import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { productsContext } from "../../contexts/ProductContext";
import history from "../../helpers/history";

function valuetext(value) {
  return `${value} сом`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([2000, 10000]);

  const { getProducts } = React.useContext(productsContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const search = new URLSearchParams(history.location.search);
    search.set("price_gte", newValue[0]);
    search.set("price_lte", newValue[1]);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(search.toString());
  };

  return (
    <Box sx={1}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max="10000"
      />
    </Box>
  );
}

// export default RangeSlider;
