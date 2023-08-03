import React from 'react';
import Card from './Card';
import image1 from '../assets/mac_book_air_15_small.jpg';
import image2 from '../assets/mac_book_air_15_large.jpg';
import image3 from '../assets/bts_small.jpg';
import image4 from '../assets/bts_large.jpg';
import image5 from '../assets/ip14_small.jpg';
import image6 from '../assets/ip14_large.jpg';
import image7 from '../assets/14_small.jpg';
import image8 from '../assets/14_large.jpg';
import image9 from '../assets/vision_small.jpg';
import image10 from '../assets/vision_large.jpg';


export default function Module() {
  return (
    <section>
        <Card bgImage={image1} bgImage1={image2} head="Macbook Air 15''" subhead="Impressively big. Impossibly thin." link1="Learn More" link2="Buy"/>
        <Card bgImage={image3} bgImage1={image4} head="Save on Mac or iPad for college." subhead="Plus get a gift card up to $150." link1="Learn More" link2="Shop now"/>
        <Card bgImage={image5} bgImage1={image6} head="Iphone 14 Pro" subhead="Pro. Beyond." link1="Learn More" link2="Buy"  whiteContent = {true}/>
        <div class="card-wrapper">
          <Card bgImage={image7} bgImage1={image8} head="Iphone 14" subhead="Wonderfull." link1="Learn More" link2="Buy"/>
          <Card bgImage={image9} bgImage1={image10} head="Vision Pro" subhead="Welcome to the era of spatial computing." link1="Learn More" link2="Buy" isBottom = {true}/>
        </div>
    </section>
  )
}
