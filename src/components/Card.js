import React, { useState } from 'react';
export default function Card({ bgImage, bgImage1, head, subhead, link1, link2, isBottom = false, whiteContent = false}) {
  /* const [isBottom, setBottom] = useState(false);
  const contentBottom = isBottom ? "bottom" : ""; */
  return (
    <div className='card'>
      <picture>
        <source srcSet={bgImage1} media='(min-width: 768px)'/>
        <img src={bgImage} alt=""/>
      </picture>
      <div className={`content ${isBottom ? "bottom" : ""}`}>
        <h2 className={`head ${whiteContent ? "white" : ""}`}>{head}</h2>
        <h3 className={`subhead ${whiteContent ? "white" : ""}`}>{subhead}</h3>
        <div className='links'>
           <a href="/">{link1}</a>
           <a href="/">{link2}</a>
        </div>
      </div>
    </div>
  )
}
