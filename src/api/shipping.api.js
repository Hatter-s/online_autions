import pb from "./config";

export const getShippingsBySellerIdAPI = async (sellerId) => {
  const resultList = await pb.collection("shippings").getList(1, 50, {
    filter: `seller = "${sellerId}"`,
    expand: "seller, buyer, order.product_id",
    requestKey: null,
  });

  return resultList.items;
};

export const getShippingsByBuyerIdAPI = async (buyerId) => {
  const resultList = await pb.collection("shippings").getList(1, 50, {
    filter: `buyer = "${buyerId}"`,
    expand: "seller, buyer, order.product_id",
    requestKey: null,
  });

  return resultList.items;
};

export const addShippingAPI = async (shippingData) => {
  const record = await pb.collection("shippings").create(shippingData);

  return record;
};

export const updateShippingAPI = async (shippingId, shippingData) => {
  const record = await pb
    .collection("shippings")
    .update(shippingId, shippingData, {
      expand: "seller, buyer, order.product_id",
    });

  return record;
};
