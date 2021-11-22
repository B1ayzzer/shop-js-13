import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";

const AddTopic = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrise] = useState("");
  const [brand, setBrand] = useState("");

  const { addMainTopic } = useContext(productsContext);

  function handleAddTopic() {
    const newTopic = {
      image: [image],
      description: description,
      brand: brand,
      price: price,
    };
    addMainTopic(newTopic);
  }

  return (
    <div>
      <input
        name="pise"
        onChange={(e) => setPrise(e.target.value)}
        placeholder="Цена"
        type="text"
      />
      <input
        name="image"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Изображение"
        type="text"
      />
      <input
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Название"
        type="text"
      />
      <input
        name="brand"
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Брэнд"
        type="text"
      />
      <Link to="/">
        <button onClick={handleAddTopic}>Добавить</button>
      </Link>
    </div>
  );
};

export default AddTopic;
