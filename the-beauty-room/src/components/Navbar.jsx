import React from 'react'

function Navbar() {
  return (
    <nav className='w-full h-[10vh] py-3 px-5 fixed bg-white z-[9999]'>
        <div className=' flex justify-between w-full h-full'>
            <div className='flex items-center'>The Beauty Room</div>
            <div className='flex w-[50%] justify-between items-center list-none text-lg '>
                <li>Home</li>
                <li>About</li>    
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact</li>
                <button className='bg-pink-500 text-amber-50 py-2 px-3 rounded-3xl'>Book Now</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar