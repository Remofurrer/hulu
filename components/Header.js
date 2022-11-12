import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"

function Header() {
  
  return (
    <header className='flex flex-col items-center m-5 sm:flex-row justify-between h-auto'>

        {/* left section */}
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="Home" Icon={HomeIcon}/>
            <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
            <HeaderItem title="Collections" Icon={CollectionIcon}/>
            <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
            <HeaderItem title="Search" Icon={SearchIcon}/>
            <HeaderItem title="Account" Icon={UserIcon}/>
        </div>

        {/* right section */}
        <div>
            <h1 className='font-bold text-5xl text-white cursor-pointer'>hulu</h1>
        </div>

    </header>
  )
}

export default Header