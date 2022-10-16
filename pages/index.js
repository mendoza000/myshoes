import { HiMenu, HiStar } from "react-icons/hi";
import Card from "../components/home/Card";

export default function Home() {
  return (
    <div className="container min-h-screen bg-background_main">
      <div className="flex items-center justify-between px-6 py-4">
        <HiMenu className="w-7 h-7 fill-fonts_main" />
        <h1 className="text-3xl font-bold text-center fill-fonts_main ">
          myShoes
        </h1>
        <HiMenu className="fill-transparent" />
      </div>

      <div className="mx-4 mt-4">
        <div className="flex justify-center gap-6">
          <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center border-b-2 border-b-buttons_main">
            News
          </h3>
          <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center text-fonts_secondary">
            Most sold
          </h3>
          <h3 className="flex items-center py-1 pr-4 text-xl font-semibold text-center text-fonts_secondary">
            Comming
          </h3>
        </div>

        <div className="grid items-center justify-center grid-cols-2 gap-6 my-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
