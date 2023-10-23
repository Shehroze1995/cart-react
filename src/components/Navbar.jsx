import cart from "../assets/cart.png";
import { useGlobally } from "./Context";

const Navbar = () => {
  const { amount } = useGlobally();
  return (
    <nav className="bg-[#6e6e6e] py-4 fixed top-0 w-full">
      <div className="max-w-xl m-auto flex items-center justify-between px-3">
        <p className="text-3xl font-bold text-white">Checkout</p>
        <div className="relative">
          <img className="w-10" src={cart} alt="cart" />
          <span className="bg-white font-bold text-[18px] w-6 h-6 absolute flex items-center justify-center rounded-full top-[-10px] right-[-5px]">
            {amount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
