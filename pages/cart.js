import Card from "@components/cart/Card";
import AlertInfo from "@components/ui/AlertInfo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCreditCard } from "react-icons/hi";
import InfoPayMd from "@components/cart/InfoPayMd";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let x = 0;
    cart?.forEach((e) => {
      x = x + e.price;
    });
    setTotalPrice(x);
  }, [cart]);

  return (
    <div className="container min-h-screen pb-20 bg-background_main animate__animated animate__fadeIn animate__faster lg:max-w-4xl md:mx-auto md:max-w-xl dark:bg-bg_dark">
      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="text-3xl font-bold text-center md:mt-5 fill-fonts_main dark:text-background_main_l">
          Cart
        </h1>
      </div>

      {cart?.length < 1 && <AlertInfo message={"This cart is empty!"} />}

      {cart?.length >= 1 && (
        <div className="flex items-center justify-between p-3 mx-5 mb-5 border-2 border-opacity-50 shadow-md border-buttons_main bg-background_main_l rounded-xl md:mb-10 dark:bg-bg_dark_o dark:border-transparent dark:text-background_main_l">
          <span>Items: {cart ? cart.length : " 0"}</span>

          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          {cart?.map((e) => {
            // TODO: falta terminar las cards del carrito
            return <Card key={e.id} {...e} />;
          })}
        </div>

        <InfoPayMd cart={cart} />

        {cart.length >= 1 && (
          <button className="flex items-center justify-center gap-1 px-10 py-4 mx-auto shadow-xl md:hidden mt-7 bg-opacity-80 bg-buttons_main rounded-xl">
            <HiOutlineCreditCard className="w-5 h-5" />
            Continue with the payment
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
