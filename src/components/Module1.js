import React from 'react'
import Card from './Card';
import image1 from '../assets/watch_small.jpg';
import image2 from '../assets/watch_medium.jpg';
import image3 from '../assets/ipadpro_small.jpg';
import image4 from '../assets/ipadpro_medium.jpg';
import image5 from '../assets/trade_small.jpg';
import image6 from '../assets/trade_medium.jpg';
import image7 from '../assets/apple_medium.jpg';
import image8 from '../assets/apple_large.jpg';



export default function Module1() {
  return (
    <section>
      <div class="card-wrapper">
            <Card bgImage={image1} bgImage1={image2} head="Watch Series 8" subhead="A healthy leap ahead." link1="Learn More" link2="Buy" whiteContent = {true}/>
            <Card bgImage={image3} bgImage1={image4} head="Ipad Pro" subhead="Supercharged by M2" link1="Learn More" link2="Buy" whiteContent = {true}/>
      </div>
      <div class="card-wrapper">
            <Card bgImage={image5} bgImage1={image6} head="Trade In" subhead="Upgrade and save. It's that easy." link1="Learn More" link2="Buy"/>
            <Card bgImage={image7} bgImage1={image8} head="Card" subhead="Get up to 3% Daily Cash back with every purchase." link1="Learn More" link2="Buy"/>
      </div>
    </section>
  )
}
