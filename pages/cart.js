import Card from "@components/cart/Card";
import AlertInfo from "@components/ui/AlertInfo";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container min-h-screen bg-background_main animate__animated animate__fadeIn animate__faster">
      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="text-3xl font-bold text-center fill-fonts_main ">
          Cart
        </h1>
      </div>

      <div className="flex flex-col gap-4 mx-5">
        <Card />
        <Card />
        <Card />
      </div>

      {/* {cart.length <= 0 && <AlertInfo message={"This cart is empty!"} />} */}
    </div>
  );
};

export default Cart;