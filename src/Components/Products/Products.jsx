import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Products() {
  // this function to get all products
  async function getAllProducts() {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(data);
    } catch (error) {
      console.log("error ", error);
    }
  }

  const [allProducts, setAllProducts] = useState(null);

  useEffect(function () {
    getAllProducts(); // this is the best place to call API
  }, []);

  return (
    <>
      {allProducts ? (
        <div className="container">
          <div className="row g-5 align-content-center">
            {allProducts.map(function (element, idx) {
              return (
                <div
                  key={idx}
                  className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12"
                >
                  <div className=" item bg-primary position-relative  text-white rounded-2 ">
                    <img
                      src={element.image}
                      className="w-100"
                      alt={element.title}
                    />
                    <h6 className="text-center">
                      {element.title.slice(0, element.title.indexOf(" ", 20))}
                    </h6>
                    <p>Price : {element.price}</p>
                    <div className="position-absolute top-0 end-0 bg-danger">
                      {element.rating.rate}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
