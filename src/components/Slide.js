import React from 'react'
export default function Slide({ imgSmall, imgLarge, category, quote }) {
  return (
    <div className='slide'>
        <picture>
            <source media='(min-width:650px)' srcset={imgLarge} />
            <img src={imgSmall} alt='' width='auto' height='575'/>
          </picture>
          <div className='slideContent slideUp'>
            <div className='about'>
                <p className='category'>{category}</p>
                <p className='quote'>{quote}</p>
            </div>
            <button type='button' className='playBtn'>Stream Now</button>
          </div>
    </div>
  )
}
