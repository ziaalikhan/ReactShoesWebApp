import React, { useState, useEffect } from "react";
import Data from "./Data";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Product() {
  // console.log(Data);

  useEffect(() => {
    AOS.init();
  }, []);

  const [items, setItems] = useState(Data);

  const filterItem = (categoryItem) => {
    const updatedItem = Data.filter((val) => {
      return val.category === categoryItem;
    });

    setItems(updatedItem);
  };

  return (
    <div>
      <div className="headingProduct">
        <h2>Products</h2>
      </div>
      <div className=" allbuttons">
        <button className="btn1" onClick={() => filterItem("sketcher")}>
          Sketcher Brand
        </button>
        <button className="btn1" onClick={() => filterItem("Nike")}>
          Nike Brand
        </button>

        <button className="btn1" onClick={() => setItems(Data)}>
          All Brands
        </button>
        {/* <button className='btn1'>Mens Cloth</button> */}
      </div>
      <div className="products">
        {Object.keys(items).map((keyName) => {
          const shoe = items[keyName];
          return (
            <Link className="link" key={keyName} to={`/product/${keyName}`}>
              <div
                className="cardCont"
                data-aos="slide-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img
                  className="cardImage"
                  width="250px"
                  height="250px"
                  src={shoe.image}
                  alt=""
                />
                <div className="cardDesc">
                  <h6>Details : {shoe.desc} </h6>
                  <h6>
                    Price: <span>{shoe.price}</span>
                  </h6>
                  <div className="btnCont">
                    <button>Add To Cart</button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
