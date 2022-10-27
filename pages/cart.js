import Card from "@components/cart/Card";
import AlertInfo from "@components/ui/AlertInfo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCreditCard } from "react-icons/hi";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let x = 0;
    cart.forEach((e) => {
      x = x + e.price;
    });
    setTotalPrice(x);
  }, [cart]);

  return (
    <div className="container min-h-screen pb-20 bg-background_main animate__animated animate__fadeIn animate__faster">
      {cart.length <= 0 && <AlertInfo message={"This cart is empty!"} />}

      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="text-3xl font-bold text-center fill-fonts_main ">
          Cart
        </h1>
      </div>

      <div className="flex items-center justify-between p-3 mx-5 mb-5 border-2 border-opacity-50 shadow-md border-buttons_main bg-background_main_l rounded-xl">
        <span>Items: {cart.length}</span>

        <span>Total: ${totalPrice.toFixed(2)}</span>
      </div>

      <div className="flex flex-col gap-4 mx-5">
        {cart.map((e) => {
          // TODO: falta terminar las cards del carrito
          return <Card key={e.id} {...e} />;
        })}
      </div>

      <button className="flex items-center justify-center gap-1 px-10 py-4 mx-auto shadow-xl mt-7 bg-opacity-80 bg-buttons_main rounded-xl">
        <HiOutlineCreditCard className="w-5 h-5" />
        Continue with the payment
      </button>
    </div>
  );
};

export default Cart;
