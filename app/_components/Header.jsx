import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

const Header = () => {
    const MenuList = [
        {
            name: "Home",
            patch: "/"
        },
        {
            name: "Store",
            patch: "/store"
        },
        {
            name: "Explore",
            patch: "/explore"
        },

    ]
    return (
        <div className='flex p-4 px-10 md:px-20 lg:px-48 bg-primary border-b-4 border-black justify-between items-center'>
            <h1 className='font-bold text-lg bg-black text-white px-2 p-1'>
                DIGI STORE
            </h1>
            <ul className=" gap-5 md:flex hidden">
                {
                    MenuList.map((item, index) => (
                        <li key={index} className="hover:border-2 cursor-pointer hover:border-white px-2 p-1">
                            {item.name}
                        </li>
                    ))
                }
            </ul>
            <div className='flex items-center gap-5'>
                <ShoppingBag />
                <Button variant="destructive" className="text-black font-bold">Start Selling</Button>
                <UserButton />

            </div>
        </div>
    )
}

export default Header