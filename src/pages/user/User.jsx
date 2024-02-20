import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./userSlice";

import Layout from "@/app/layout/Layout";

function User() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  return (
    <>
      <Layout>
        <h1>Hello world!</h1>
        {user.username !== "" && (
          <div>
            <h2>{user.username} </h2>
            <p> {user.email} </p>
          </div>
        )}
      </Layout>
    </>
  );
}

export default User;
