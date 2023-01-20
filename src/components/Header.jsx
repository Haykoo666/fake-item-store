import React, { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import BasketItem from './BasketItem';
import shopLogo from "../Images/shop-logo.svg"
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion'

// className='sticky-top'

const Header = () => {

   const [isOpen, setIsOpen] = useState(false);
   const presentAnimation = {
      hidden: {
         x: -100,
         opacity: 0,
      },
      visible: custom => ({
         x: 0,
         opacity: 1,
         transition: { delay: custom * 0.2 }
      }),
   } 

   
   return (
      <header>                
         <div className="p-2">
            <span className="logo">
               <img src={shopLogo} alt="shop-logo" height="50px"/> {""}
               My shop
            </span>
            <ul className="navv">
               <li>about us </li>
               <li>contact</li>
               <li>profile</li>
            </ul>
               <AiOutlineShoppingCart 
                  className={`shop--btn ${isOpen && "active"}`} 
                  onClick={() => setIsOpen(!isOpen)}
               />
               {
                  isOpen && <BasketItem />
               }
         </div>
         <motion.div 
            className="presentation"
            initial = "hidden"
            animate = "visible"
            variants = { presentAnimation }
            transition = {{
               delay: 1
            }}
            custom = { 1 }
         ></motion.div>
      </header>
   )
}

export default Header