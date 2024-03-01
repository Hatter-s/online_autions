import pb from "./config";

export const getAllProductsAPI = async (sort = "created") => {
  const records = await pb.collection("products").getFullList({
    sort: "-" + sort,
  });
  const products = records.map(product => ({
    id: product.id,
    product_image: product.product_image,
    name: product.name,
    description: product.description,
    is_fix_price: product.is_fix_price,
    minium_price: product.minium_price,
    seller: product.seller,
    category: product.category,
  }))

  return products;
};

export const getProductByIdAPI = async (productId) => {
  const record = await pb.collection('products').getOne(productId);
  const product = {
    id: record.id,
    product_image: record.product_image,
    name: record.name,
    description: record.description,
    is_fix_price: record.is_fix_price,
    minium_price: record.minium_price,
    seller: record.seller,
    category: record.category,
  }
  
  return product;
}

export const addProductAPI = async (productData) => {
  const data = {
    name: productData.name,
    description: productData.description,
    is_fix_price: productData.is_fix_price,
    minium_price: productData.minium_price,
    seller: productData.seller,
    product_image: productData.product_image,
    categories: productData.categories
  };

  const record = await pb.collection("products").create(data);
  return record;
};

// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model.id);

// "logout" the last authenticated account
// pb.authStore.clear();
