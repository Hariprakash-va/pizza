import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu, { MenuLoader } from "./features/menu/Menu";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import Order, { OrderLoader } from "./features/order/Order";
import CreateOrder, { actionCreateOrder } from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import { actionUpdateOrder } from "./features/order/updateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionCreateOrder,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: actionUpdateOrder,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
