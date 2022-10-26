import React, { useState, useEffect } from 'react'
import { BiSliderAlt } from "react-icons/bi"
import { SlMagnifier } from "react-icons/si"
import data from 'pages/api/data.json'
import LongCard  from '@components/ui/LongCard'


export default function Search() {
  const [filteredShoes, setFilteredShoes] = useState([])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    keyword: '',
    isFromMan: null,
    minPrice: null,
    maxPrice: null,
  })

  const getFilteredShoes = () => {
    const filtered = data
    .filter( shoe => shoe.name.toLowerCase().includes(filters.keyword.toLowerCase()) )
    .filter( shoe => {
      if (filters.isFromMan === null) return true
      else return shoe.isFromMan === filters.isFromMan
    })
    .filter( shoe => {
      if (filters.minPrice === null && filters.maxPrice === null) return true
      if (filters.minPrice && filters.maxPrice === null) {
        return shoe.price > filters.minPrice
      }
      else if (filters.minPrice === null && filters.maxPrice) {
        return shoe.price < filters.maxPrice
      }
      else if (filters.minPrice && filters.maxPrice) {
        return shoe.price > filters.minPrice && shoe.price < filters.maxPrice
      }
    })
    setFilteredShoes(filtered)
  }
  const handleChange = e => {
    setFilters({ ...filters, keyword: e.target.value })
  }
  const handleFilterOpen = () => {
    setFiltersOpen(filtersOpen ? false : true)
  }
  const handleMinPriceChange = e => {
    if (e.target.value === '') {
      setFilters({...filters, minPrice: null})
      return
    }
    const value = parseInt(e.target.value)
    if (filters.maxPrice !== null && value > filters.maxPrice) return
    setFilters({ ...filters, minPrice: value })
  }
  const handleMaxPriceChange = e => {
    if (e.target.value === '') {
      setFilters({...filters, maxPrice: null})
      return
    }
    const value = parseInt(e.target.value)
    if (filters.minPrice !== null && value < filters.minPrice) return
    setFilters({ ...filters, maxPrice: value })
  }

  useEffect(() => {
    getFilteredShoes()
  }, [filters]) //eslint-disable-line

  return <section className='h-screen w-screen flex flex-col overflow-x-hidden mb-12'>
    <div className='w-full h-28 flex justify-center items-end shadow-md'>
      <div className='relative mb-4 w-4/5 '>
        <input onChange={handleChange} className='w-full p-2 h-max rounded-md border-solid border border-light_gray
        focus-visible:outline-none transition-colors ' placeholder='Search...' spellCheck={false} />
        {/* <button onClick={() => {filters.keyword === ''}} /> */}
        <button onClick={handleFilterOpen} className='absolute right-0 top-0 bg-buttons_main h-full w-12 rounded-r-md flex justify-center z-10 items-center' >
          <BiSliderAlt className='h-3/4 w-3/4 text-background_main_l' />
        </button>
        {
          filtersOpen &&
          <div className='absolute right-3 flex flex-col bg-background_main_l z-20 w-3/4 px-4 rounded-2xl shadow-lg'>
            <fieldset className='flex justify-around mt-4'>
              <div className='basis-[calc(90%/3)]'>
                <input type='radio' className={`appearence-none hidden select-label `} name='gender' id='all' 
                defaultChecked={filters.isFromMan === null && true} onChange={() => { setFilters({ ...filters, isFromMan: null }) }} />
                <label className='ml-1 h-full p-1 rounded-xl text-black w-11/12 text-center block transition-[color,box-shadow,transform] duration-300' htmlFor='all'>All</label>
              </div>
              <div className='basis-[calc(90%/3)]'>
                <input type='radio' className={`appearence-none hidden select-label `} name='gender' id='woman' 
                defaultChecked={filters.isFromMan === false && true} onChange={() => { setFilters({ ...filters, isFromMan: false }) }}
                 />
                <label className='ml-1 h-full p-1 rounded-xl text-black w-11/12 text-center block transition-[color,box-shadow,transform] duration-300' htmlFor='woman'>Woman</label>
              </div>
              <div className='basis-[calc(90%/3)]'>
                <input type='radio' className={`appearence-none hidden select-label `} name='gender' id='man' 
                defaultChecked={filters.isFromMan === true && true} onChange={() => { setFilters({ ...filters, isFromMan: true }) }} />
                <label className='ml-1 h-full p-1 rounded-xl text-black w-11/12 text-center block transition-[color,box-shadow,transform] duration-300' htmlFor='man'>Man</label>
              </div>
            </fieldset>
            <span className='block mt-4' >Choose a price</span>
            <div className='flex justify-between mb-4'>
              <input type='number' placeholder='Min' className='w-[45%] bg-buttons_main rounded-md pl-3 py-1 text-black placeholder:text-background_main_l focus-visible:outline-fonts_main' onChange={handleMinPriceChange} />
              <input type='number' placeholder='Max' className='w-[45%] bg-buttons_main rounded-md pl-3 py-1 text-black placeholder:text-background_main_l focus-visible:outline-fonts_main' onChange={handleMaxPriceChange} />
            </div>

          </div>
        }
      </div>
    </div>
    <div className='w-11/12 mx-auto h-[81%]'>
      {
        filteredShoes.map(shoe => {
          return <LongCard key={shoe.id} {...shoe} />
        })
      }
    </div>
  </section>
}