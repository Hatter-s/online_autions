import UserLayout from "@/app/layout/UserLayout";
import { Outlet } from "react-router-dom";

function User() {

  return (
    <>
      <UserLayout>
        <Outlet />
      </UserLayout>
    </>
  );
}

export default User;
