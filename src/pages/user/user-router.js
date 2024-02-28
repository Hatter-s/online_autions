import GeneralInformation from "./GeneralInformation";
import SellProducts from "./SellProduct";

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
];

export default userRouter;
