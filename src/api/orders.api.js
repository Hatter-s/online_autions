import pb from "./config";

export const addOrderAPI = async (orderData) => {
  const record = await pb.collection("orders").create(orderData);

  return record;
};

export const getOrdersBySellerIdAPI = async (sellerId) => {
  // fetch a paginated records list
  const resultList = await pb.collection("orders").getList(1, 50, {
    filter: "seller_id =" + sellerId,
  });

  return resultList;
};

export const getOrdersByUserIdAPI = async (userId) => {
  const resultList = await pb.collection("orders").getList(1, 50, {
    filter: "seller_id =" + userId,
  });

  return resultList;
};

