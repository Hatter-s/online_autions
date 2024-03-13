import pb from "./config";

export const loginAPI = async (userLogin) => {
  const authData = await pb
    .collection("users")
    .authWithPassword(userLogin.username, userLogin.password);
  const userData = authData.record;

  return {
    id: userData.id,
    username: userData.username,
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar,
    balance: userData.balance,
    watch_list: userData.watch_list,
    sell_list: userData.sell_list,
  };
};

export const registerAPI = async (userRegister) => {
  const data = {
    username: userRegister.username,
    name: userRegister.username,
    email: userRegister.email,
    emailVisibility: true,
    password: userRegister.password,
    passwordConfirm: userRegister.passwordConfirm,
    balance: 0,
    watch_list: [],
    sell_list: [],
  };

  const record = await pb.collection("users").create(data);

  return record;
};

export const logoutAPI = async () => {
  pb.authStore.clear();
};

export const resetTokenAPI = async () => {
  if (pb.authStore.isValid) {
    const authData = await pb.collection("users").authRefresh();

    const userData = authData.record;
    return {
      id: userData.id,
      username: userData.username,
      name: userData.name,
      email: userData.email,
      avatar: userData.avatar,
      balance: userData.balance,
      watch_list: userData.watch_list,
      sell_list: userData.sell_list,
    };
  }

  return null;
};

export const updateUserInfoAPI = async (userId, updateData) => {
  const record = await pb.collection("users").update(userId, updateData);
  return {
    id: record.id,
    username: record.username,
    name: record.name,
    email: record.email,
    avatar: record.avatar,
    balance: record.balance,
    watch_list: record.watch_list,
    sell_list: record.sell_list,
  };
};

export const updateBalanceAPI = async (userId, updateBalance) => {
  const record = await pb.collection("users").update(userId, updateBalance);
  return record;
};

export const getUserNameByIdAPI = async (userId) => {
  //make it can duplicate
  const record = await pb
    .collection("users")
    .getOne(userId, { requestKey: null });

  return record.name;
};


// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model.id);

// "logout" the last authenticated account
// pb.authStore.clear();
