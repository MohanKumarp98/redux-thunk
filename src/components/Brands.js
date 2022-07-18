import React, { useEffect } from "react";
import brandimg from "../assets/navimg/jock logo.jpg";
import "../style/Brand.css";
import Data from "./Data";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import BreadCurm from "./BreadCurm";
import Chip from "./Chip";
import { Stack } from "@mui/material";
import { clearCollectionfilter } from "../redux/actions/productActions";
import { fetchProducts, todoProducts } from "../services/apicalls/todoproduct";

const Brands = () => {
  const products = useSelector((state) => state.allProducts.products);
  const filteredDatas = useSelector((state) => state.allProducts.filteredData);
  const collection = useSelector((state) => state.allProducts.collectionFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("/users"))
    dispatch(todoProducts("/todos"))
  }, [])
  

  const clearCollectionFilter = () => {
    dispatch(clearCollectionfilter());
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-3 col-sm-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9">
          <div className="container pt-3">
            <div className="">
              <BreadCurm />
              <div className="mr-3 mb-3 mt-3">
                <Stack direction="row" spacing={1}>
                  {collection.map((val, i) => {
                    return <Chip val={val} key={i} />;
                  })}
                  {collection.length >= 2 ? (
                    <p className="clear-all" onClick={clearCollectionFilter}>Clear all</p>
                  ) : (
                    ""
                  )}
                </Stack>
              </div>
            </div>
            <div className="row">
              {filteredDatas.length === 0
                ? products.map((val) => {
                    return <Data key={val.id} data={val} />;
                  })
                : filteredDatas.map((val) => {
                    return <Data key={val.id} data={val} />;
                  })}
            </div>
          </div>
        </div>

        {/* <div className="col-9"><Data /></div> */}
      </div>
    </div>
  );
};

export default Brands;
