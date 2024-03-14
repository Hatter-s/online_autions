import GeneralInformation from "./GeneralInformation";
import SellProducts from "./SellProduct";
import Orders from "./component/Orders/Orders";
import WatchList from "./component/WatchList";
import Shippings from "./component/Shippings/Shippings";

const userRouter = [
  { index: true, Component: GeneralInformation },
  {
    id: "general-information",
    path: "general-information",
    Component: GeneralInformation,
  },
  {
    id: "sell-products",
    path: "sell-products",
    Component: SellProducts,
  },
  {
    id: "orders",
    path: "orders",
    Component: Orders,
  },
  {
    id: "watch-list",
    path: "watch-list",
    Component: WatchList,
  },
  {
    id: "shippings",
    path: "shippings",
    Component: Shippings,
  },
];

export default userRouter;
