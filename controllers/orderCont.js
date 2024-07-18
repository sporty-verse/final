import Order from "../models/Order.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import User from "../models/User.js";
import twilio from "twilio";

const client = twilio(
  "ACbae29dff74528eb4dda89e176954d6e8",
  "55e8d28d7d28374ce2a059ae1514fe22"
);

export const addToOrder = async (req, res, next) => {
  try {
    const newOrder = new Order(req.body);
    const user = await User.findById(req.body.userId);
    const order = await newOrder.save();
    res.status(200).json(order);
    await client.messages.create({
      body: `SPORTY-VERSE Order Placed\nName:${order.address.name}\nPhone No.${order.address.number}\nAddress : ${order.address.address}\nAmount : ${order.amount}\nProduct-detail\nProduct-name :${order.products.title}\nSize : ${order.products.sizes}\nColor : ${order.products.colors}\nQuantity: ${order.products.quantity}
      `,
      from: "+14348300740",
      to: "+91 8670510842",
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(order);
  } catch (error) {
    next(err);
  }
};

export const removeOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted!");
  } catch (error) {
    next(err);
  }
};

export const getUserOrders = async (req, res, next) => {
  try {
    const order = await Order.find({ userId: req.body.userId });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

//GetSingleOder
export const getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

//Get all only Admin
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

//Monthely stats by Admin
export const monthlyOrderData = async (req, res, next) => {
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: lastMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    next(error);
  }
};

export const getOrderStats = async (req, res, next) => {
  try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear - 1));

    const data = await Order.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
          amount: { $sum: "$sales" },
        },
      },
    ]);
    const whole = data.reduce((n, { total }) => n + total, 0);
    const totalAmount = data.reduce((n, { amount }) => n + amount, 0);
    res.status(200).json({ data, whole, totalAmount });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const validate = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
      return res.status(400).json("Payment is invalid");
    } else {
      return res.status(200).json({
        msg: "Successful!",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
