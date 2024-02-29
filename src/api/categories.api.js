import pb from "./config";

export const getAllCategoriesAPI = async () => {
  const records = await pb.collection("categories").getFullList({
    sort: "-name,created",
  });

  return records;
};

export const addCategoryAPI = async (categoryData) => {
  const data = {
    name: categoryData,
  };

  const record = await pb.collection("categories").create(data);
  return record.name;
};
