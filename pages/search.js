import React, { useState, useEffect } from "react";
import { BiSliderAlt } from "react-icons/bi";
import data from "pages/api/data.json";
import LongCard from "@components/ui/LongCard";

export default function Search() {
  const [filteredShoes, setFilteredShoes] = useState(data);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    keyword: "",
    isFromMan: null,
    minPrice: null,
    maxPrice: null,
  });

  const getFilteredShoes = () => {
    const filtered = data
      .filter((shoe) =>
        shoe.name.toLowerCase().includes(filters.keyword.toLowerCase())
      )
      .filter((shoe) => {
        if (filters.isFromMan === null) return true;
        else return shoe.isFromMan === filters.isFromMan;
      })
      .filter((shoe) => {
        if (filters.minPrice === null && filters.maxPrice === null) return true;
        if (filters.minPrice && filters.maxPrice === null) {
          return shoe.price > filters.minPrice;
        } else if (filters.minPrice === null && filters.maxPrice) {
          return shoe.price < filters.maxPrice;
        } else if (filters.minPrice && filters.maxPrice) {
          return shoe.price > filters.minPrice && shoe.price < filters.maxPrice;
        }
      });

    setFilteredShoes(filtered);
  };
  const handleChange = (e) => {
    setFilters({ ...filters, keyword: e.target.value });
  };
  const handleFilterOpen = () => {
    setFiltersOpen(filtersOpen ? false : true);
  };
  const handleMinPriceChange = (e) => {
    if (e.target.value === "") {
      setFilters({ ...filters, minPrice: null });
      return;
    }
    const value = parseInt(e.target.value);
    if (filters.maxPrice !== null && value > filters.maxPrice) return;
    setFilters({ ...filters, minPrice: value });
  };
  const handleMaxPriceChange = (e) => {
    if (e.target.value === "") {
      setFilters({ ...filters, maxPrice: null });
      return;
    }
    const value = parseInt(e.target.value);
    if (filters.minPrice !== null && value < filters.minPrice) return;
    setFilters({ ...filters, maxPrice: value });
  };

  useEffect(() => {
    getFilteredShoes();
  }, [filters]); //eslint-disable-line

  return (
    <section className="flex flex-col w-screen h-screen mb-12 overflow-x-hidden">
      <div className="flex items-end justify-center w-full shadow-md h-28">
        <div className="relative w-4/5 mb-4 ">
          <input
            onChange={handleChange}
            className="w-full p-2 transition-colors border border-solid rounded-md h-max border-light_gray focus-visible:outline-none "
          />
          <button
            onClick={handleFilterOpen}
            className="absolute top-0 right-0 z-10 flex items-center justify-center w-12 h-full bg-buttons_main rounded-r-md"
          >
            <BiSliderAlt className="w-3/4 text-black h-3/4" />
          </button>
          {filtersOpen && (
            <div className="absolute z-20 flex flex-col w-3/4 px-4 shadow-lg right-3 bg-background_main_l rounded-2xl">
              <fieldset className="flex justify-around mt-4">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="all"
                    defaultChecked={filters.isFromMan === null && true}
                    onChange={() => {
                      setFilters({ ...filters, isFromMan: null });
                    }}
                  />
                  <label className="ml-1" htmlFor="all">
                    All
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="woman"
                    defaultChecked={filters.isFromMan === false && true}
                    onChange={() => {
                      setFilters({ ...filters, isFromMan: false });
                    }}
                  />
                  <label className="ml-1" htmlFor="woman">
                    Woman
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="man"
                    defaultChecked={filters.isFromMan === true && true}
                    onChange={() => {
                      setFilters({ ...filters, isFromMan: true });
                    }}
                  />
                  <label className="ml-1" htmlFor="man">
                    Man
                  </label>
                </div>
              </fieldset>
              <span className="block mt-4">Choose a price</span>
              <div className="flex justify-between mb-4">
                <input type="number" placeholder="Min" />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-[45%] bg-light_gray rounded-md pl-3 py-1 text-black"
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-11/12 mx-auto h-[81%]">
        {filteredShoes.map((shoe) => {
          return <LongCard key={shoe.id} {...shoe} />;
        })}
      </div>
    </section>
  );
}
