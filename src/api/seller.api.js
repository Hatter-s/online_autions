import pb from "./config";

const getSellerById = async (sellerId) => {
    const record = await pb.collection('users').getOne(sellerId);

    
}