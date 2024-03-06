import pb from "./config";

export const getSellerByIdAPI = async (sellerId) => {
  const record = await pb.collection("users").getOne(sellerId);

  return {
    id: record.id,
    username: record.username,
    email: record.email,
    avatar: record.avatar,
    balance: record.balance,
    watch_list: record.watch_list,
    sell_list: record.sell_list,
  };
};
