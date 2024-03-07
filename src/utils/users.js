import { getUserNameByIdAPI } from "../api/user.api"

export const getSellerNameById = async (sellerId) => {
    const response = await getUserNameByIdAPI(sellerId);

    return response;
}
