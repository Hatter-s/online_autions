import {
  getProductToDateAPI,
  getBestOrderByProductIdAPI,
  updateProductAPI,
  updateOrderAPI,
  addShippingAPI,
} from "@/api";

export * from "./categories";
export * from "./users";

export const getImageByUrl = (collection_name, record_id, filename) => {
  return `${
    import.meta.env.VITE_FILE_URL
  }/${collection_name}/${record_id}/${filename}`;
};

export const changeDateFormat = (date) => {
  const newDate = new Date(date);
  const dateD = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  const year = newDate.getFullYear();
  return `${year}-${month}-${dateD}`;
};

export const remainDate = (date) => {
  let compareDate = new Date(date);
  let presentDate = Date.now();
  let differenceInTime = compareDate.getTime() - presentDate;
  if (differenceInTime <= 0) {
    return "sold out!";
  }

  if (differenceInTime <= 60000) {
    return "1 minute";
  }

  if (differenceInTime <= 3600000) {
    return Math.round(differenceInTime / 60000) + " minutes";
  }

  if (differenceInTime <= 86400000) {
    return Math.round(differenceInTime / 3600000) + " hours";
  }

  let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays + " days";
};

export const handleShippingStatus = (shippingStatus) => {
  const shippingStatusTexts = [
    "Seller is prepare the order",
    "Seller cancel the order",
    "Buyer cancel the order",
    "The order is given to shipping unit",
    "The order is on the way to you",
    "The order has been delivered successfully",
  ];

  if (typeof shippingStatus === "string") {
    return shippingStatusTexts.findIndex(
      (statusText) => statusText === shippingStatus
    );
  }

  return shippingStatusTexts[shippingStatus];
};

export const handleToDateProduct = async () => {
  setInterval(async () => {
    const products = await getProductToDateAPI();

    if (products.length === 0) {
      return;
    }

    for (const product of products) {
      const order = await getBestOrderByProductIdAPI(product.id);

      if (order === undefined) {
        await updateProductAPI(product.id, { product_status: 1 });
      } else {
        const updateOrderStatus = await updateOrderAPI(order.id, {
          order_status: 2,
        });
        if (Object.keys(updateOrderStatus).length !== 0) {
          await updateProductAPI(product.id, { product_status: 2 });
          await addShippingAPI({
            order_id: order.id,
            seller: order.seller_id,
            buyer: order.buyer_id,
            status: "Seller is prepare the item",
          });
        }
      }
    }
  }, 60 * 1000);
};
