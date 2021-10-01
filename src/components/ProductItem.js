import React from "react";
import { useParams } from "react-router";
import Data from "./Data";

function ProductItem() {
  const { id } = useParams();
  const shoes = Data[id];

  if (!shoes) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>
        Welcome To Product Item
      </h2>

      <div
        id="productItem_cont"
        className="cardCont"
        data-aos="slide-up"
        // data-aos-delay="100"
        data-aos-duration="1000"
      >
        <img
          className="cardImage"
          width="250px"
          height="250px"
          src={shoes.image}
          alt=""
        />

        <div className="cardDesc">
          <h6>Details : {shoes.desc} </h6>
          <h6>
            Price: <span>{shoes.price}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
