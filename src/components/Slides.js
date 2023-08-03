import React , { useState } from 'react'
import Slide from './Slide'
import image1 from '../assets/fnbaseball.jpg'
import image2 from '../assets/fnbaseball_large.jpg'
import image3 from '../assets/rosebryne.png'
import image4 from '../assets/rosebryne_large.png'
import image5 from '../assets/hijack.png'
import image6 from '../assets/hijack_large.png'
import image7 from '../assets/foundation.png'
import image8 from '../assets/foundation_large.png'
import image9 from '../assets/themorningshow.png'
import image10 from '../assets/themorningshow_large.png'
import image11 from '../assets/stephen.png'
import image12 from '../assets/stephen_large.png'

export default function Slides() {
    const [index, setIndex] = useState(0);
    let hasPrev = index > 0;
    let hasNext = index < 5;
    function handlePrevClick() {
        if (hasPrev) {
            setIndex(index - 1);
        } else {
            setIndex(5);
        }
    }
      function handleNextClick() {
        if (hasNext) {
          setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
  return (
    <section className='slides'>
        <div className='slides_Inner'>
            <button type='button' className='prevBtn' onClick={handlePrevClick}>&lt;</button>
            <button type='button' className='nextBtn' onClick={handleNextClick}>&gt;</button>
            <div className='center'>
                { index === 0 && <Slide imgSmall={image1} imgLarge={image2} category={'Sports'} quote={'Live LMB games every Friday.'}/> }
                { index === 1 && <Slide imgSmall={image3} imgLarge={image4} category={'Comedy'} quote={'New Season.'}/> }
                { index === 2 ? <Slide imgSmall={image5} imgLarge={image6} category={'Thriller'} quote={"Let them think they're in control."}/> : null }
                { index === 3 ? <Slide imgSmall={image7} imgLarge={image8} category={'Sci-Fi'} quote={'All Empires fall.'}/> : null }
                { index === 4 ? <Slide imgSmall={image9} imgLarge={image10} category={'Drama'} quote={'Control is an illusion.'}/> : null }
                { index === 5 ? <Slide imgSmall={image11} imgLarge={image12} category={'Documentary'} quote={'From underdog to unstoppable.'}/> : null }
            </div>
            
        </div>
        <div className='dots'>
                <button type='button' className={index === 0 ? 'dotBtn active' : 'dotBtn'} value='0' onClick={() => setIndex(0)}></button>
                <button type='button' className={index === 1 ? 'dotBtn active' : 'dotBtn'} value='1' onClick={() => setIndex(1)}></button>
                <button type='button' className={index === 2 ? 'dotBtn active' : 'dotBtn'} value={2} onClick={() => setIndex(2)}></button>
                <button type='button' className={index === 3 ? 'dotBtn active' : 'dotBtn'} value={3} onClick={() => setIndex(3)}></button>
                <button type='button' className={index === 4 ? 'dotBtn active' : 'dotBtn'} value={4} onClick={() => setIndex(4)}></button>
                <button type='button' className={index === 5 ? 'dotBtn active' : 'dotBtn'} value={5} onClick={() => setIndex(5)}></button>
            </div>
    </section>
  )
}
