import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";

const EditTopic = () => {
  const { data, editTopicDetails } = useContext(productsContext);

  const [price, setPrice] = useState(data.price);
  const [image, setImage] = useState(data.image);
  const [description, setDescription] = useState(data.description);
  const [brand, setBrand] = useState(data.brand);

  function handleEditProduct() {
    const obj = {
      price,
      image:[image],
      brand,
      description,
    };

    editTopicDetails(obj);
  }
  return (
    <>
      <div>
        {data ? (
          <div className="add-topic">
            <div className="add-sub-topic">
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="img URL"
                value={image}
                onChange={(e) => setImage([e.target.value])}
              />
              <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <Link to="/">
                <button onClick={handleEditProduct}>Save</button>
              </Link>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default EditTopic;
