import RenderResult from 'next/dist/server/render-result'
import Image from 'next/image'
import React from 'react'
import {ThumbUpIcon} from '@heroicons/react/outline'


function Thumbnail({result}) {

  return (
    <div className='group cursor-pointer p-2 mt-2 transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50'>
        <Image
        className='rounded-lg shadow-xl'
        alt='movie thumbnail image'
        layout='responsive' 
            src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        width={1920} 
        height={100}/>

        <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title ? result.title : result.name }</h2>

            <div className='flex items-center justify-between opacity-0 group-hover:opacity-100'>
                <p>Language: {result.original_language ? result.original_language : "en"}</p>
                <p>Vote: {result.vote_average}</p>
                <ThumbUpIcon className='h-7 cursor-pointer ' />
            </div>
        </div>
    </div>
  )
}

export default Thumbnail