import React, { useEffect, useContext, useState } from "react";
import { productsContext } from "../../contexts/ProductContext";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import "../../assets/css/Product.css"

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(products.length / 4 );
  // сколько страниц

  useEffect(() => {
    getProducts();
  }, []);

  function changePage({ selected }) {
    setPage(selected);
  }

  const productsPerPage = 4;
  // сколько будет на странице

  const pageVisited = page * productsPerPage;

  const displayProducts = products
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((item) => <ProductCard key={item.id} item={item} />);

  return (
    <>
      {/* <div className="mainCard">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div> */}
      <Grid container spacing={2}>
        {displayProducts}
        <div  className="peg">

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          />
          </div>
      </Grid>
    </>
  );
};

export default ProductsList;
