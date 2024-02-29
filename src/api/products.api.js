import pb from "./config";

export const addProductAPI = async (productData) => {
  const data = {
    "name": productData.name,
    "description": productData.description,
    "is_fix_price": productData.is_fix_price,
    "minium_price": productData.minium_price,
    "seller": productData.seller,
    "product_image": productData.product_image,
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
