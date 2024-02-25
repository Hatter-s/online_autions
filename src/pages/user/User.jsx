import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

import UserLayout from "@/app/layout/UserLayout";
import { Outlet } from "react-router-dom";

function User() {
  const user = useSelector(selectUser);

  return (
    <>
      <UserLayout>
        <Outlet />
      </UserLayout>
    </>
  );
}

export default User;
