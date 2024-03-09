import pb from "./config";

export const addOrderAPI = async (orderData) => {
  const record = await pb.collection("orders").create(orderData);

  return record;
};

export const getOrdersBySellerIdAPI = async (sellerId) => {
  // fetch a paginated records list
  const resultList = await pb.collection("orders").getList(1, 50, {
    filter: `seller_id = "${sellerId}"`,
  });

  //   const resultList = await pb.collection('orders').getFullList({
  //     sort: '-created',
  // });

  const sellerOrders = resultList.items.map((order) => ({
    id: order.id,
    created: order.created,
    updated: order.updated,
    buyer_id: order.buyer_id,
    seller_id: order.seller_id,
    product_id: order.product_id,
    offer_price: order.offer_price,
    is_fix_price: order.is_fix_price,
    is_accept: order.is_accept,
  }));
  return sellerOrders;
};

export const getOrdersByBuyerIdAPI = async (buyerId) => {
  const resultList = await pb.collection("orders").getList(1, 50, {
    filter: "buyer_id =" + buyerId,
  });

  const buyerOrders = resultList.items.map((order) => ({
    id: order.id,
    created: order.created,
    updated: order.updated,
    buyer_id: order.buyer_id,
    seller_id: order.seller_id,
    product_id: order.product_id,
    offer_price: order.offer_price,
    is_fix_price: order.is_fix_price,
    is_accept: order.is_accept,
  }));
  return buyerOrders;
};

export const getOrderByProductIdAPI = async (productId) => {
  const resultList = await pb.collection("ordersView").getList(1, 50, {
    filter: `product_id = "${productId}" `,
  });

  return resultList.items[0];
};
