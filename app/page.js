import React from 'react'
import Hero from './Hero'
import ProductsList from './_components/ProductsList'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='p-10 md:px-36 lg:px-48'>
        <ProductsList />
      </div>
    </div>
  )
}

export default Home