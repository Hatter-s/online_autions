import pb from "./config";

export const getAllProductsAPI = async (
  filter = null,
  sort = {sortType: "DESC", sortKind: "created"},
  
) => {
  let records;
  let filterData = `product_status = 0`;
  let sortData ="";

  //handle filter
  if (filter !== null) {
    if (filter.search !== "") {
      filterData += `&& name ~ "${filter.search}"`;
    }
    if (filter.categories !== "label") {
      filterData += `&& categories = "${filter.categories}"`;
    }
    if (filter.fixPrice !== "label") {
      filterData += `&& is_fix_price = ${filter.fixPrice}`;

      if (filter.fixPrice === "false") {
        if (filter.minDate !== "") {
          filterData += `&& time_closing >= "${filter.minDate}"`;
        }
        if (filter.maxDate !== "") {
          filterData += `&& time_closing <= "${filter.maxDate}"`;
        }
      }
    }
    if (filter.minPrice !== 0) {
      filterData += `&& minium_price >= "${filter.minPrice}"`;
    }
    if (filter.maxPrice !== 0) {
      filterData += `&& minium_price <= "${filter.maxPrice}"`;
    }
  }

  //handle sort
  if (sort.sortType === "DESC") {
    sortData += "-";
  } else if(sort.sortType === "ASC") {
    sortData += "+";
  }

  sortData += sort.sortKind;

  // API
  records = await pb.collection("productsView").getList(1, 50, {
    filter: filterData,
    sort: sortData,
    expand: "current_buyer, seller, categories"
  });

  return records.items;
};

export const getProductByIdAPI = async (productId) => {
  const record = await pb.collection("products").getOne(productId);

  return record;
};

export const getProductBySellerIdAPI = async (sellerId) => {
  const resultList = await pb.collection("products").getList(1, 50, {
    filter: `seller = "${sellerId}"`,
  });

  return resultList.items;
};

export const addProductAPI = async (productData) => {
  const data = {
    name: productData.name,
    description: productData.description,
    is_fix_price: productData.is_fix_price,
    minium_price: productData.minium_price,
    seller: productData.seller,
    product_image: productData.product_image,
    categories: productData.categories,
    time_closing: productData.time_closing,
  };

  const record = await pb.collection("products").create(data, {expand: "seller, categories"});

  return record;
};

export const updateProductAPI = async (productId, updateData) => {
  let record;
  if (updateData.is_fix_price) {
    record = await pb
      .collection("products")
      .update(productId, { ...updateData, time_closing: null });
  } else {
    record = await pb.collection("products").update(productId, updateData, {expand: "seller, categories"});
  }

  return record;
};

export const addUserToWishlistAPI = async (productId, userId, wishListOf) => {
  if (wishListOf.includes(userId)) {
    new Error("This product already in ur wish list!");
  }
  let record;
  if (wishListOf.length === 0) {
    record = await pb
      .collection("products")
      .update(productId, { wish_list_of: [userId] });
  } else {
    record = await pb
      .collection("products")
      .update(productId, { wish_list_of: [...wishListOf, userId] });
  }

  const product = {
    id: record.id,
    product_image: record.product_image,
    name: record.name,
    description: record.description,
    is_fix_price: record.is_fix_price,
    minium_price: record.minium_price,
    seller: record.seller,
    category: record.categories,
    wish_list_of: record.wish_list_of,
  };

  return product;
};

export const getWatchListAPI = async (userId) => {
  const records = await pb.collection("productsView").getList(1, 50, {
    filter: `wish_list_of ~ "${userId}"`,
    expand: "current_buyer, seller, categories"
  });

  return records.items;
};

export const getProductToDateAPI = async () => {
  const records = await pb.collection("toDateProducts").getFullList();

  return records;
};
