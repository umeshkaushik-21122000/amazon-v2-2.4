import React from 'react'
import Header from '../components/header'
import Image from 'next/dist/client/image'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/react'
function checkout() {
    const items=useSelector(selectItems);
    const { data: session } = useSession();

  return (
    <div className='bg-gray-100 '>
        <Header />
        <main className='lg:flex max-w-screen-2xl mx-auto'>
           {/*left */}
            <div className='flex-grow m-5 shadow-sm'>
            <Image 
                src="https:/links.papareact.com/ikj"
                height={250}
                width={1020}
                objectFit="contain"
            />
            <div className='flex flex-col  p-5 space-y-10 bg-white'>
                <h1 className='text-3xl border-b pb-4'>{items.length===0?"your amazon basket is empty":"shopping basket"}</h1>
              
                {items.map(({id,title,price,description,category,image,rating,hasPrime})=>
                (
                <CheckoutProduct
                    key={id}
                    id={id}
                    title={title}
                    rating={rating}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    hasprime={true}
                />
                ))
                }
            </div>
            </div>

        {/*right*/}
            <div className='mt-2'>
                {items.length>0&&
                (
                <>
                <h2 className='whitespace-nowrap'>
                    subtotal ({items.length} items) : 
                <span className='font-bold'>.
                </span>
                </h2>
                    <button className= {`${!session ? ' p-2 text-xs md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 active:from-gray-500 cursor-not-allowed':"button mt-2" }`}>
                     {!session ? "signin to checkout " : "proceed to checkout"}
                        </button>
                    </>
                )
                }
            </div>
        </main>
      
        
    </div>
  )
}

export default checkout