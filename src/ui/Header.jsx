import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-slate-700 py-30 flex items-center justify-between border-b border-stone-200 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest text-yellow-400">
        Pizza Hunt🍕
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
