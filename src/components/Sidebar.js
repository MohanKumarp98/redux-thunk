import React, { useEffect, useRef, useState } from "react";
import "../style/Sidebar.css";
import sidebarimg from "../assets/navimg/jock logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addCollectionfilter,
  clearDeletedfilter,
} from "../redux/actions/productActions";
import ColorBox from "./ColorBox";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.allProducts.collectionFilter);
  const deleted = useSelector((state) => state.allProducts.deletedfilter);

  const [collection, setCollection] = useState(filterData);
  const [data, setdata] = useState(filterData);

  const [refer, setRefer] = useState([
    "Men",
    "Women",
    "Footware",
    "Kids",
    "Accessories",
  ]);

  // console.log(collection, "cole");
  // console.log(filterData, "filterData");

  const men = useRef();
  const women = useRef();
  const footware = useRef();
  const kids = useRef();
  const accessories = useRef();

  useEffect(() => {
    dispatch(addCollectionfilter(collection));
  }, [collection]);
  
  useEffect(()=>{
    refer.map((val) => {
      if (filterData.includes(val) === false) {
        if (val === "Men") {
          men.current.checked = false;
        } else if (val === "Women") {
          women.current.checked = false;
        } else if (val === "Kids") {
          kids.current.checked = false;
        } else if (val === "Footware") {
          footware.current.checked = false;
        } else if (val === "Accessories") {
          accessories.current.checked = false;
        } else {
          console.log("else condition");
        }
        setCollection(filterData)
      }
    });

    if(filterData===[]){
      men.current.checked = false;
      women.current.checked = false;
      kids.current.checked = false;
      footware.current.checked = false;
      accessories.current.checked = false;
      setCollection([])
    }
  },[filterData])

  const handleCollection = (e) => {
    if (collection.indexOf(e.target.value) === -1) {
      setCollection([...collection, e.target.value]);
    } else {
      const index = collection.indexOf(e.target.value);
      const newArray = collection.splice(index, 1);
      setCollection([...collection]);
    }
  };

  return (
    <div className="container-fluid sidebar">
      <div className="row">
        <div className="col">
          <img src={sidebarimg} alt="" />

          <div className="collection">
            <h4>Collections</h4>

            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Men"
                  id="flexCheckDefault"
                  onChange={handleCollection}
                  ref={men}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Men
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Women"
                  ref={women}
                  id="flexCheckDefault"
                  onChange={handleCollection}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Women
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Kids"
                  ref={kids}
                  id="flexCheckDefault"
                  onChange={handleCollection}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Kids
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Footware"
                  ref={footware}
                  id="flexCheckDefault"
                  onChange={handleCollection}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Footware
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Accessories"
                  ref={accessories}
                  id="flexCheckDefault"
                  onChange={handleCollection}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Accessories
                </label>
              </div>
            </div>
          </div>

          <div className="collection">
            <h4>Categories</h4>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  All Collections
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Dress
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Jumpsuits
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Winter Wear
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Tops
                </label>
              </div>
            </div>
          </div>

          <div className="collection">
            <h4>Occasion</h4>

            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  All Collections
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Casual
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Formal
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Party
                </label>
              </div>
            </div>
          </div>

          <div className="collection">
            <h4>Stories</h4>

            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Snow white
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="collection">
            <h4>Color</h4>
            <ColorBox />
          </div>

          <div className="collection">
            <h4>Stock</h4>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                All
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                New
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Old
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
