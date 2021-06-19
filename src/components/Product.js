import React, { Component, useState, useEffect } from "react";
import { fetchProductById, fetchProducts } from "../api";

const Product = (props) => {
  const [product, setProduct] = useState({});


  useEffect(() => {
    fetchProductById(props.productId)
      .then((res) =>
        setProduct({
            id: res.id,
            title: res.title,
            price: res.price,
            description: res.description,
            category: res.category,
            image: res.image,
          },
        ))
      .catch((err) => console.error("An error occured: " + err));
  });

  return (
    <div>
      <img src={product.image} style={{ height: 400, width: 400 }} />
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button>View Product</button>
      </div>
    </div>
  );
};

// class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: {},
//       productList: [],
//     };
//   }

// componentDidMount() {
//   fetchProductById(this.props.productId)
//     .then((res) =>
//       this.setState({
//         product: {
//           id: res.id,
//           title: res.title,
//           price: res.price,
//           description: res.description,
//           category: res.category,
//           image: res.image,
//         },
//       })
//     )
//     .catch((err) => console.error("An error occured: " + err));
// }

//   render() {
//     console.log(this.state.productList[0]);

//     let product = this.state.product;
//     return (
//       <div>
//         <img src={product.image} style={{ height: 400, width: 400 }} />
//         <div>
//           <p>{product.title}</p>
//           <p>{product.price}</p>
//           <p>{product.description}</p>
//           <button>View Product</button>
//         </div>
//       </div>
//     );
//   }
// }

export default Product;
