import GeneralInformation from "./GeneralInformation";
import SellProducts from "./SellProduct";
import Orders from "./component/Orders";

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
  }
];

export default userRouter;
