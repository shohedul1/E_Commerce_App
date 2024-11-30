import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ProductCardItem = ({ product }) => {
    return (
        <div  >
            <Card className="p-3 w-full h-full relative overflow-hidden " >
                <div className='w-full h-[200px] relative overflow-hidden'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-full"
                    />
                </div>
                <div className='mt-3 '>
                    <h2 className='font-bold text-xl'>{product.name}</h2>
                    <h2 className='font-bold text-2xl text-yellow-500'>${product.price}</h2>
                    <div className='mt-3 md:flex items-center justify-between overflow-hidden'>
                        <div className='flex gap-2 items-center'>
                            <Image src={product?.user?.image} alt='user' width={20} height={20}
                                className='rounded-full w-5 h-5'
                            />
                            <h2 className='text-sm text-gray-400'>{product?.user?.name}</h2>
                        </div>
                        <Button className="mt-3" size="sm">
                            Add to cart
                        </Button>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default ProductCardItem