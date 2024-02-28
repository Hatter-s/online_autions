import pb from "./config";

export const loginAPI = async (userLogin) => {
    const authData = await pb.collection('users').authWithPassword(
        userLogin.username,
        userLogin.password,
    );
    const userData = authData.record;

    return {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        avatar: userData.avatar,
        balance: userData.balance,
        watch_list: userData.watch_list,
        sell_list: userData.sell_list
    };
}

// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model.id);

// "logout" the last authenticated account
// pb.authStore.clear();
