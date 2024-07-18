import axios from "axios";
import app from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSucess,
  getProductFailure,
  getProductStart,
  getProductSucess,
} from "../redux/productSlice";

const imgArray = [];

export const uploadToFirebase = (files, setImge, setPercentage) => {
  if (files === undefined) return console.log("NA");
  const storage = getStorage(app);
  for (let i = 0; i < files.length; i++) {
    const fileName = new Date().getTime() + files[i].name;
    const imgRef = ref(storage, `/products/${fileName}`);
    const uploadTask = uploadBytesResumable(imgRef, files[i]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(Math.round(progress));
        switch (snapshot.state) {
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          imgArray.push(downloadURL);
          setImge(imgArray);
        });
      }
    );
  }
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//PRODUCTS

export const handelUpload = async (objdata, currentUser, navigate) => {
  await axiosInstance.post("/products", objdata, {
    headers: { access_token: currentUser.access_token },
  });
  navigate("/products");
  window.location.reload();
};

export const fetchRowData = async (type, dispatch, currentUser) => {
  dispatch(getProductStart());
  try {
    const res = await axiosInstance.get(type, {
      headers: { access_token: currentUser.access_token },
    });
    dispatch(getProductSucess(res.data));
  } catch (err) {
    dispatch(getProductFailure(err));
  }
};

export const deleteProduct = async (id, dispatch, currentUser) => {
  dispatch(deleteProductStart());
  try {
    await axiosInstance.delete(`products/${id}`, {
      headers: { access_token: currentUser.access_token },
    });
    dispatch(deleteProductSucess(id));
  } catch (err) {
    dispatch(deleteProductFailure(err));
  }
};

//SingleUser or SingleProduct
export const fetchSingledata = async (param, currentUser) => {
  const res = await axiosInstance.get(`${param}`, {
    headers: { access_token: currentUser.access_token },
  });
  return res;
};
// Stats
export const stats = async (type, currentUser, setAmount) => {
  if (type === "income") {
    const res = await axiosInstance.get(`orders/stats`, {
      headers: { access_token: currentUser.access_token },
    });
    setAmount(res.data);
  } else {
    const res = await axiosInstance.get(`${type}/stats`, {
      headers: { access_token: currentUser.access_token },
    });
    return res.data;
  }
};

export const revenu = async (currentUser) => {
  const res = await axiosInstance.get(`orders/currentmonthincome`, {
    headers: { access_token: currentUser.access_token },
  });
  return res.data;
};

export const getOrders = async (currentUser) => {
  const res = await axiosInstance.get(`orders`, {
    headers: { access_token: currentUser.access_token },
  });
  return res.data;
};

export const getOrder = async (param,currentUser) => {
  const res = await axiosInstance.get(`${param}`, {
    headers: { access_token: currentUser.access_token },
  });
  return res.data;
};
