import { useGlobally } from "./Context";
import CartItem from "./CartItem";
import loadingGif from "../assets/loading.gif";

const CartContainer = () => {
  const { cart, total, loading, clearCart } = useGlobally();
  if (loading)
    return <img className="m-auto w-56 mt-24" src={loadingGif} alt="loading" />;

  return (
    <div className="max-w-xl m-auto flex flex-col items-center pb-8 pt-24">
      <h1 className="text-[2.5rem] font-bold text-green-600">YOUR CART</h1>
      <span className="w-32 border-2 border-green-600 mb-4 mt-[-5px]"></span>
      {cart.length == 0 && <div className="text-2xl opacity-60">is currently empty</div>}
      {cart.length > 0 && (
        <section className=" w-full flex flex-col items-center">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <hr className="border border-[#0000003d] w-full mt-8 mb-2" />
          <div className="flex items-center justify-between w-full font-bold text-xl px-3">
            <p>Total</p>
            <p className="bg-blue-600 px-2 rounded text-white">${total}</p>
          </div>
          <button
            onClick={clearCart}
            className="text-white px-4 py-1 rounded font-bold bg-black my-4"
          >
            Clear Cart
          </button>
        </section>
      )}
    </div>
  );
};

export default CartContainer;
