'use client';

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Products from '../_mockData/Products';
import ProductCardItem from './ProductCardItem';

const ProductsList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(Products)
    }, [])
    return (
        <div >
            <h2 className='font-bold text-xl flex justify-between items-center'>
                Feature
                <span>
                    <Button>View All</Button>
                </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                {
                    productList.map((product, index) => (
                        <ProductCardItem product={product} key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default ProductsList