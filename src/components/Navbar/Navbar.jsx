import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About Us', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Product Detail', path: '/products/:productId' },
        { id: 6, name: 'Cart', path: '/cart' },
        { id: 7, name: 'Checkout', path: '/checkout' }
      ];

    return (
        <nav className='bg-purple-400 mx-16 mt-2'>
             <div onClick={() => setIsOpen(!isOpen)}  className='md:hidden'>
                {/* <span> {isOpen === true ? 'open' : 'close'} </span> */}
                <span>
                     {
                     isOpen === true ?   <XMarkIcon className="h-6 w-6 text-purple-500" />
                 : <Bars3Icon className="h-6 w-6 text-purple-500" />
                 } 
                 </span>
             </div>
            <ul className={`md:flex absolute md:static duration-500 font-bold bg-purple-400 pl-8 py-4  ${isOpen ? 'top-6' : '-top-0'}`}>
                {
                    routes.map(route => <Link 
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;