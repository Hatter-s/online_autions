import Navbar from "./Navbar";
import Footer from "./Footer";
import UserSidebar from "./UserSidebar";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <UserSidebar />
        <div className="px-4 w-full">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
