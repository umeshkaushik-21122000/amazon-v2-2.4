import React from 'react'
import Image from 'next/dist/client/image'
import {StarIcon} from "@heroicons/react/solid"
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import {addToBasket} from '../slices/basketSlice';

function Product({id,title,price,description,category,image,height,width}) {
    
    const [rating] = useState(Math.floor(((Math.random()*10)%5)+1));
    const [hasPrime]=useState(Math.random()<0.5)
    const dispatch=useDispatch();
        const addItemToBasket=()=>{
            const Product={
                id,
                title,
                price,
                description,
                category,
                image,
                rating,
                hasPrime
            }
            dispatch(addToBasket(Product));
        };
       
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        
        <Image
        src={image}
        height={height}
        width={width}
        objectfit="contain"
        />

        <h4 className='my-3'>{title}</h4>

        <div className="flex">
            {Array(rating)
            .fill()
            .map((_,i)=>
            (
                <StarIcon className='h-5 text-yellow-500' />
            )
            )}
            
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <CurrencyFormat value={price*100} prefix={"₹"} thousandSeparator={true} displayType={'text'} decimalScale={0}/>
        </div>
        
        { hasPrime&&(
        <div className='flex items-center space-x-2 -mt-5'>
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>)}
        <button onClick={addItemToBasket} className='mt-auto button'>Add to basket</button>
    </div>
  )
}

export default Product