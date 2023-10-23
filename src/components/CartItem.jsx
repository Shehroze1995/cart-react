import { useGlobally } from "./Context";

// eslint-disable-next-line react/prop-types
const CartItem = ({ id, amount, img, price, title }) => {
  const { toggleAmount, removeItem } = useGlobally();
  return (
    <div className="flex items-center justify-between my-2 w-full pr-4">
      <img className="w-16" src={img} alt={title} />
      <section className="flex-1">
        <header className="capitalize font-bold">{title}</header>
        <p>${price}</p>
        <button onClick={() => removeItem(id)} className="text-red-500">
          Remove
        </button>
      </section>
      <div className="flex flex-col items-center">
        <button
          onClick={() => toggleAmount(id, "inc")}
          className="text-xl font-bold text-blue-600"
        >
          +
        </button>
        <p>{amount}</p>
        <button
          onClick={() => toggleAmount(id, "dec")}
          className="text-xl font-bold text-blue-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
