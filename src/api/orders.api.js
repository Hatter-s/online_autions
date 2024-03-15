import pb from "./config";
import { updateProductAPI, addShippingAPI } from "@/api";

export const addOrderAPI = async (orderData) => {
  let record;
  if (orderData.is_fix_price) {
    record = await pb
      .collection("orders")
      .create({ ...orderData, order_status: 2 });
    await updateProductAPI(orderData.product_id, { product_status: 2 });
    await addShippingAPI({buyer: orderData.buyer_id, seller: orderData.seller_id,order: record.id})
  } else {
    record = await pb.collection("orders").create(orderData);
  }

  return record;
};

export const getOrdersBySellerIdAPI = async (sellerId) => {
  // fetch a paginated records list
  const resultList = await pb.collection("ordersView").getList(1, 50, {
    filter: `seller_id = "${sellerId}"`,
    expand: "buyer_id, product_id",
  });

  //   const resultList = await pb.collection('orders').getFullList({
  //     sort: '-created',
  // });

  // const sellerOrders = resultList.items.map((order) => ({
  //   id: order.id,
  //   created: order.created,
  //   updated: order.updated,
  //   buyer_id: order.buyer_id,
  //   seller_id: order.seller_id,
  //   product_id: order.product_id,
  //   offer_price: order.offer_price,
  //   is_fix_price: order.is_fix_price,
  //   is_accept: order.is_accept,
  //   buyer_name: order.buyer_name,
  //   seller_name: order.seller_name,
  // }));
  return resultList.items;
};

export const getOrdersByBuyerIdAPI = async (buyerId) => {
  const resultList = await pb.collection("buyerOrdersViews").getList(1, 50, {
    filter: `buyer_id ="${buyerId}"`,
    expand: "seller_id, product_id",
  });

  return resultList.items;
};

export const getBestOrderByProductIdAPI = async (productId) => {
  const resultList = await pb.collection("ordersView").getList(1, 50, {
    filter: `product_id = "${productId}"`,
  });

  return resultList.items[0];
};

export const updateOrderAPI = async (orderId, orderData) => {
  const record = await pb.collection('orders').update(orderId, orderData);

  return record;
}