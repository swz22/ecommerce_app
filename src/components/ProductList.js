import React, { Component, useState, useEffect } from "react";
import { fetchProductById, fetchProducts } from "../api";

const ProductList = (props) => {
  const [productList, setProduct] = useState([]);
  
  useEffect(() => {
    fetchProductById(props.productId)
      .then((res) =>
        setProduct(
            {
              id: res.id,
              title: res.title,
              price: res.price,
              description: res.description,
              category: res.category,
              image: res.image,
            }
        ))
      .catch((err) => console.error("An error occured: " + err));
  });

  const buildProduct = (product) => {
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
    )
  }

  return (
    <div>
      {
        productList.map(product => { 
          return buildProduct(product)
        })
      }
    </div>
  );
};


// import React, { Component, useState, useEffect } from "react";
// import { fetchProductById, fetchProducts } from "../api";

// const ProductList = (props) => {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     fetchProducts()
//       .then((res) =>
//         setProductList({
//             productList:res
//           }))
//       .catch((err) => console.error("An error occured: " + err));
//   });

//   console.log(productList.map(product => { console.log(product)})

//   return (
//     <div>
//       <img src={productList.image} style={{ height: 400, width: 400 }} />
//       <div>
//         <p>{productList.title}</p>
//         <p>{productList.price}</p>
//         <p>{productList.description}</p>
//         <button>View Product</button>
//       </div>
//     </div>
//   );
// };



// class ProductList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productList: [],
//     };
//   }
  // componentDidMount() {
  //   fetchProducts()
  //     .then(
  //       (res) =>
  //         this.setState({
  //           productList: res,
  //         })
  //     )
  //     .catch((err) => console.error("An error occured: " + err));
  // }


//   render() {
//     // console.log(this.state.productList[0]);

//     console.log("productList", this.state.productList.map(product => { console.log(product)})
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
//     return this.state.productsList
//   }
// }

export default ProductList;
