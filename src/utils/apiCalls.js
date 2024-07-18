import axios from "axios"; //9475066473
import {
  getProductFailure,
  getProductStart,
  getProductSucess,
} from "../redux/productSlice";
import swal from "sweetalert";
const URL = import.meta.env.VITE_API_URL;

export const getAll = async (dispatch, param) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(`${URL}${param}`);
    dispatch(getProductSucess(res.data));
  } catch (err) {
    dispatch(getProductFailure(err));
  }
};
export const getLatestProducts = async (dispatch, param) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(`${URL}/products?${param}`);
    dispatch(getProductSucess(res.data));
  } catch (err) {
    dispatch(getProductFailure(err));
  }
};

export const getSingle = async (param) => {
  try {
    const res = await axios.get(`${URL}/products/find/${param}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const creatRazorpayOrder = async (totalAmount, receiptId, formData) => {
  try {
    const res = await axios.post(
      `${URL}/orders/razorpay`,
      {
        amount: 100 * totalAmount,
        currency: "INR",
        receipt: receiptId,
        notes: formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const razorpayPaymentValidation = async (
  razorpay_order_id,
  razorpay_payment_id,
  razorpaySignatur
) => {
  try {
    const validateRes = await axios.post(
      `${URL}/orders/validate`,
      {
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id,
        razorpay_signature: razorpaySignatur,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    swal("Payment", validateRes.data.msg, "success", { button: false });
  } catch (err) {
    return err;
  }
};

export const createOrder = async (data, access_token) => {
  try {
    const res = await axios.post(`${URL}/orders`, data, {
      headers: { access_token: access_token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const orderCreation = async (
  currentUser,
  products,
  amount,
  address,
  status,
  navigate
) => {
  try {
    const res = await axios.post(
      `${URL}/orders`,
      {
        userId: currentUser._id,
        products,
        address,
        amount: amount / 100,
        status,
      },
      {
        headers: { access_token: currentUser.access_token },
      }
    );
    navigate("/orders");
  } catch (err) {
    return err;
  }
};

export const getOrders = async (id, token) => {
  try {
    const res = await axios.post(
      `${URL}/orders/getall`,
      { userId: id },
      {
        headers: {
          "Content-Type": "application/json",
          access_token: token,
        },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getOrderDetails = async (params, access_token) => {
  try {
    const res = await axios.get(`${URL}/orders/find/${params}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
