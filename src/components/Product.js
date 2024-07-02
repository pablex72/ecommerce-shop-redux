import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //API
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3 mb-4" style={{ marginBottom: "10px" }}>
      <div className="card h-100" style={{ width: "18rem" }}>
        <div className="text-center mt-3">
          <img
            className="card-img-top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
        </div>
        <div className="card-footer" style={{ background:'gray' }}>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1> Product Dashboard </h1>
      {/* {JSON.stringify(products)} */}
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
