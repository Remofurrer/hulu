import React from 'react'
import Thumbnail from './Thumbnail'

function Results({results}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {results.map(item => (
            <Thumbnail key={item.id} result={item}/>
        ))}
    </div>
  )
}

export default Results