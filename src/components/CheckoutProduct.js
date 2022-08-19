import React from 'react'
import Image from 'next/dist/client/image';
import { StarIcon } from '@heroicons/react/solid';
import CurrencyFormat from 'react-currency-format';
import { addToBasket,removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
    function CheckoutProduct({id,title,price,description,category,image,rating,hasPrime}){
  
        const dispatch=useDispatch();
        const addItemtoBasket=()=>{
            const product = {
              id,
              title,
              price,
              rating,
              description,
              category,
              image,
              hasPrime,
            };
            dispatch(addToBasket(product));
        };

        const removeItemfromBasket=()=>{
            dispatch(removeFromBasket({id}));
        }

  return (
    < div className='grid grid-cols-5 '>
    <Image src={image} height={200} width={200} objectFit='contain' />
      <div className='col-span-3 mx-5'>
      <p>{title}</p>
          <div className='flex'>
            {
            Array(rating)
            .fill()
            .map((_,i) => (
              <StarIcon key={i} className='h-5 text-yellow-500 ' />

            ))}

          </div>
          <p className='text-xs my-2 line-clamp-3 '>{description}</p>
          <CurrencyFormat value={price*100} prefix={"₹"} thousandSeparator={true} displayType={'text'} decimalScale={0}/>

          { hasPrime&&(
        <div className='flex items-center space-x-2 -mt-5 '>
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xl text-gray-500'>Free Next-day Delivery</p>
        </div>)}

      </div>
      <div className='flex flex-col space-y-2 m-auto justify-items-end '>
      <button onClick={addItemtoBasket} className='button'>Add to Basket</button> 
         <button onClick={removeItemfromBasket} className='button'>Remove from Basket</button> 
      </div>
      </div>
  )
}

export default CheckoutProduct