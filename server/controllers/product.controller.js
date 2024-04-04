import Product from "../models/product.model.js";
import responseHandler from "../handlers/response.handler.js";

export const getProduct = async (req, res, next) => {
  const productSlug = req.params.product_slug;

  try {
    const product = await Product.findOne({
      product_slug: productSlug,
    }).exec();

    if (!product) {
      return responseHandler.badrequest(res, "Product Not Found");
    }

    const productCategory = product.categories[0].category;
    const productId = product.product_id;
    const relatedProducts = await Product.find({
      categories: { $elemMatch: { category: productCategory } },
      product_id: { $ne: productId },
    });
    return responseHandler.ok(res, { product, relatedProducts });
  } catch (err) {
    return responseHandler.error(res);
  }
};