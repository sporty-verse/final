import { Link } from "react-router-dom";
import "./widget.scss";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { useEffect, useState } from "react";
import { stats } from "../../utils/apiCalls";
import { useSelector } from "react-redux";
import { FaStoreAlt } from "react-icons/fa";

const Widget = ({ type }) => {
  let data;
  const { currentUser } = useSelector((state) => state.user);
  const [statData, setStatData] = useState();
  const [amount, setAmount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await stats(type, currentUser, setAmount);
      setStatData(res);
    };
    fetchData();
  }, [currentUser, type, setAmount]);

  const diff = "20";//Percentage

  switch (type) {
    case "users":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all users",
        icon: (
          <FaRegUser
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(225, 0, 0, 0.11)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        icon: (
          <IoCartOutline
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(225,0,0,0.11)",
            }}
          />
        ),
      };
      break;
    case "income":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earning",
        icon: (
          <LuCircleDollarSign
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(225,0,0,0.11)",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: true,
        link: "See deatils",
        icon: (
          <FaStoreAlt
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(225,0,0,0.11)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && `₹`}
          {type === "income" ? amount?.totalAmount : statData?.whole}
        </span>
        <Link className="link" to="/">
          <span className="moreDetails">{data?.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positve">
          <IoIosArrowUp />
          {diff} %
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
