import { useState } from "react";
import "./edit.scss";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../utils/apiCalls";
import axios from "axios";

const Edit = ({ setOpen }) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const param = location.pathname.split("/")[3];

  const [productBasicDetails, setProductBasicdetails] = useState({
    title: "",
    desc: "",
    amount: 0,
  });
  const [productOthersDetails, setProductOthersDetails] = useState({
    sizes: [],
    colors: [],
    categories: [],
  });
  const handelChange = (e) => {
    setProductBasicdetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handelChangeSCC = (e) => {
    //Scc Means Size, Color & Categories
    setProductOthersDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.split(","),
    }));
  };

  const update = async () => {
    const res = axios.put(
      `http://localhost:80/api/products/${param}`,
      { price: 18 },
      {
        headers: { access_token: currentUser.access_token },
      }
    );
    console.log(res.data);
  };
  return (
    <div className="edit">
      <div className="editContainer">
        <input
          type="text"
          onChange={handelChange}
          name="title"
          placeholder="Change Product Name"
        />
        <input
          type="text"
          onChange={handelChange}
          name="price"
          placeholder="Edit Price"
        />
        <textarea
          onChange={handelChange}
          name="desc"
          placeholder="Update Description"
        />
        <input
          type="text"
          placeholder="Edit Category"
          name="categories"
          onChange={handelChangeSCC}
        />
        <input
          type="text"
          placeholder="Add or Remove Product according to Color"
          name="color"
          onChange={handelChangeSCC}
        />
        <input
          type="text"
          placeholder="Update Product Size"
          name="sizes"
          onChange={handelChangeSCC}
        />
        <button onClick={update}>Update</button>
      </div>
      <span onClick={() => setOpen(false)}>X</span>
    </div>
  );
};

export default Edit;
