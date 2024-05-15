import { verifyAdminAccessToken } from "../middleware/verifyUser.js";
import express from "express";

import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/admin/product.controller.js";
import {
  getOrders,
  getOrder,
  updateOrderStatus,
} from "../controllers/admin/order.controller.js";

const router = express.Router();

router.post("/product/addProduct", addProduct);
router.post("/product/updateProduct", updateProduct);
router.post("/product/deleteProduct", deleteProduct);

router.get("/product/getProducts", getProducts);
router.get("/product/:pid", getProduct);

router.get("/orders/", getOrders);
router.get("/orders/:order_id", getOrder);
router.post("/orders/", updateOrderStatus);

export default router;