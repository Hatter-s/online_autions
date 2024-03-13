import pb from "./config";

export const getAllProductsAPI = async (sort = "created") => {
  const records = await pb.collection("products").getFullList({
    sort: "-" + sort,
  });
  // const products = records.map((product) => ({
  //   id: product.id,
  //   product_image: product.product_image,
  //   name: product.name,
  //   description: product.description,
  //   is_fix_price: product.is_fix_price,
  //   minium_price: product.minium_price,
  //   seller: product.seller,
  //   category: product.categories,
  //   wish_list_of: product.wish_list_of,
  // }));

  return records;
};

export const getProductByIdAPI = async (productId) => {
  const record = await pb.collection("products").getOne(productId);
  // const product = {
  //   id: record.id,
  //   product_image: record.product_image,
  //   name: record.name,
  //   description: record.description,
  //   is_fix_price: record.is_fix_price,
  //   minium_price: record.minium_price,
  //   seller: record.seller,
  //   category: record.categories,
  //   time_closing: record.time_closing,
  //   wish_list_of: record.wish_list_of,
  // };

  return record;
};

export const getProductBySellerIdAPI = async (sellerId) => {
  const resultList = await pb.collection("products").getList(1, 50, {
    filter: `seller = "${sellerId}"`,
  });

  return resultList.items;
};

export const addProductAPI = async (productData) => {
  const data = {
    name: productData.name,
    description: productData.description,
    is_fix_price: productData.is_fix_price,
    minium_price: productData.minium_price,
    seller: productData.seller,
    product_image: productData.product_image,
    categories: productData.categories,
    time_closing: productData.time_closing,
  };

  const record = await pb.collection("products").create(data);

  return record;
};

export const updateProductAPI = async (productId, updateData) => {
  let record;
  if (updateData.is_fix_price) {
    record = await pb
      .collection("products")
      .update(productId, { ...updateData, time_closing: null });
  } else {
    record = await pb.collection("products").update(productId, updateData);
  }

  return record;
};

export const addUserToWishlistAPI = async (productId, userId, wishListOf) => {
  if (wishListOf.includes(userId)) {
    new Error("This product already in ur wish list!");
  }
  let record;
  if (wishListOf.length === 0) {
    record = await pb
      .collection("products")
      .update(productId, { wish_list_of: [userId] });
  } else {
    record = await pb
      .collection("products")
      .update(productId, { wish_list_of: [...wishListOf, userId] });
  }

  const product = {
    id: record.id,
    product_image: record.product_image,
    name: record.name,
    description: record.description,
    is_fix_price: record.is_fix_price,
    minium_price: record.minium_price,
    seller: record.seller,
    category: record.categories,
    wish_list_of: record.wish_list_of,
  };

  return product;
};

export const getWatchListAPI = async (userId) => {
  const records = await pb.collection("products").getList(1, 50, {
    filter: `wish_list_of ~ "${userId}"`,
  });

  const products = records.items.map((product) => ({
    id: product.id,
    product_image: product.product_image,
    name: product.name,
    description: product.description,
    is_fix_price: product.is_fix_price,
    minium_price: product.minium_price,
    seller: product.seller,
    category: product.categories,
    wish_list_of: product.wish_list_of,
  }));

  return products;
};

export const getProductToDateAPI = async () => {
  const records = await pb.collection("toDateProducts").getFullList();

  return records;
};
