import Card from "../components/home/Card";
import data from "./api/data.json";
import "animate.css";

export default function Home() {
  return (
    <div className="container min-h-screen bg-background_main animate__animated animate__fadeIn animate__faster">
      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="text-3xl font-bold text-center fill-fonts_main ">
          myShoes
        </h1>
      </div>

      <div className="">
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

        <div className="grid items-center justify-center w-full h-full grid-cols-2 gap-6 p-5 my-8 overflow-x-hidden">
          {data.map((shoe) => {
            return <Card key={shoe.id} {...shoe} />;
          })}
        </div>
      </div>
    </div>
  );
}
