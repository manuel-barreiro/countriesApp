import React from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'

function SearchBar() {
  return (
    <div className='w-full relative'>
      <div className='max-w-xl mx-auto relative'>
        <Input type="text" className='bg-buttonBorderGray border-cardBgGray border-2 rounded-full w-full px-10 py-6 font-openSans text-[21px] text-white' placeholder="Search..." />
        <Image src={"/mag.svg"} width={20} height={10} alt='search' className='absolute top-[30%] left-3 text-white'/>
      </div>
      
    </div>
  )
}

export default SearchBar