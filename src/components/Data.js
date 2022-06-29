import React from "react";
import "../style/Data.css";
import ColorBox from "./ColorBox";

const Data = (props) => {
  const { id, title, mrp, cost, image, offer } = props.data;
  let datas = ["red", "blue", "pink", "green", "gray"];
  return (
    // <div className="container">
    //   <div className="row">

    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card card1">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body p-0">
          <div className="card-padding">
            <p className="card-text">{title}</p>
            <div className="costdetails">
              <p>MRP - {mrp}</p>
              <p className="left">Cost - {cost}</p>
            </div>
            <div className="offer">
              <p style={{ color: "blue" }}>{offer} OFF</p>
              <p className="cost-left">Cost - {cost}</p>
            </div>
            <div className="color-boxes">
              <div className="color-style">
                {datas.map((val, i) => (
                  <ColorBox color={val} key={i + 1} />
                ))}
              </div>
            </div>
          </div>
          <button className="hover-button">VIEW</button>
        </div>
      </div>
    </div>

    //    </div>
    // </div>
  );
};

export default Data;
