// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router";

// const TopicDetail = () => {
//   const { products, addDetails, deleteTopic, editTopic } =
//     useContext(productContext);
//   const [deleteTask, setDeleteTask] = useState({});

//   let params = useParams().id;

//   useEffect(() => {
//     addDetails(params);
//   });

//   useEffect(() => {
//     setDeleteTask(products.id);
//   }, [products]);
//   return (
//     <div className="details_block">
//       <div>
//         <img src={products.img} alt="" className="details_rolex" />
//       </div>
//       <div className="details_block_2">
//         <h1 className="details_brand">{products.brand}</h1>
//         <div className="details_price">{products.price}</div>
//         <p className="details_description">{products.description}</p>
//         <Link to="/">
//           <button onClick={() => deleteTopic(deleteTask)} className="btnDelete">
//             Delete
//           </button>
//         </Link>
//         <Link to={`/edit/${products.id}`}>
//           <button onClick={() => editTopic(products.id)} className="btnEdit">
//             Edit
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopicDetail;
