import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from './EmptyCart';
import DeleteItem from "./DeleteItem";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  if(!cart.length) return <EmptyCart/>
  return (
    <div className="px-4 py-3">
      <Link to="/menu">&larr; Back to menu</Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
