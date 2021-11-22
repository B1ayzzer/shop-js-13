import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductContext";
import { CircularProgress } from "@mui/material";
import { changeProductCount } from "../../contexts/ProductContext";
import "../../assets/css/Cart.css";

const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img src={elem.item.image[0]} alt="product img" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      value={elem.count}
                      type="number"
                      min="0"
                      onChange={(e) =>
                        changeProductCount(e.target.value, elem.item.id)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: {cart.totalPrice}</h4>
          <button>Buy</button>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Cart;
