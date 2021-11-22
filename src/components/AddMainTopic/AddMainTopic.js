import React, { useContext, useState } from "react";
import { productsContext } from "../../contexts/ProductContext";

const AddMainTopic = () => {
  const [title, setTitle] = useState("");
  const { addMainTopic } = useContext(productsContext);

  function handleAddTopic() {
    const newTopic = {
      topicTitle: title,
      subTopics: [],
    };
    addMainTopic(newTopic);
    setTitle("");
  }
  return (
    <div>
      <div className="add-main-topics">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название топика"
          type="text"
        />
        <button onClick={handleAddTopic}>Добавить</button>
      </div>
    </div>
  );
};

export default AddMainTopic;
