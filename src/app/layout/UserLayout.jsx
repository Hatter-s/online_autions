import Navbar from "./Navbar";
import Footer from "./Footer";
import UserSidebar from "./UserSidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-stretch">
        <UserSidebar />
        <div className="px-4 w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
