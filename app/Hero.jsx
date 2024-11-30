import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-green-700 p-10 px-28 lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 '>
                <div>
                    <h2 className='font-extralight text-5xl text-white'>
                        Speed Up your Creative workflow
                    </h2>
                    <p className='text-gray-200 mt-3'>Join a growing family of 43,436 designers,creator and makors from around the world</p>
                    <div className='flex gap-5 mt-8'>
                        <Button className="hover:text-black font-bold hover:bg-gray-50 transition-all duration-300">Explore</Button>
                        <Button className="bg-red-500 hover:text-black hover:bg-gray-50 font-bold transition-all duration-300">Sell</Button>

                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image alt='pc' src="/pc.webp" width={300} height={300} />

                </div>

            </div>

        </div>
    )
}

export default Hero