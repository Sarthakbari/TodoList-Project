import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-4 bg-gray-800  text-white'>
            <div className="logo">
                <span className=' text-xl mx-9'>iTask</span>
            </div>
            <ul className='flex gap-8 mx-9'>
                <li className='text-l cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='text-l cursor-pointer hover:font-bold transition-all'>Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar
