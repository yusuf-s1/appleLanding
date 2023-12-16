import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IconContext } from "react-icons";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
  }
  return (
    <>
      <nav>
        <IconContext.Provider value={{ color: "#242424", className: "react-icons"}}>
            <a href="/"><BsApple/></a>   
        </IconContext.Provider>
        <a href="#" className='expand'>Store</a>
        <a href="#" className='expand'>Mac</a>
        <a href="#" className='expand'>Ipad</a>
        <a href="#" className='expand'>Iphone</a>
        <a href="#" className='expand'>Watch</a>
        <a href="#" className='expand'>Vision</a>
        <a href="#" className='expand'>Airpods</a>
        <a href="#" className='expand'>TV & Home</a>
        <a href="#" className='expand'>Entertainment</a>
        <a href="#" className='expand'>Accessories</a>
        <a href="#" className='expand'>Supportt</a>
        <div className='right'>
            <a href="#"><BsSearch /></a>
            <a href="#"><BsBag /></a>
            <button onClick={handleClick} className='shrink'><HiOutlineMenuAlt4 /></button>
        </div>
    </nav>
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <button onClick={handleClick} className='closeBtn'>&times;</button>
      <div className='menu_Inner'>
        <a href="#">Store</a>
        <a href="#">Mac</a>
        <a href="#">Ipad</a>
        <a href="#">Iphone</a>
        <a href="#">Watch</a>
        <a href="#">Vision</a>
        <a href="#">AirPods</a>
        <a href="#">TV & Home</a>
        <a href="#">Entertainment</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
      </div>
    </div>
    </>
  );
}
