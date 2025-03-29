import React from 'react';

const Header=()=>{
    return (
        <>
        <div className='h-20  flex flex-row justify-between items-center shadow-sm  '>
            <div className='ml-5 text-3xl text-black font-semibold '>
                Logo
            </div>
            <div className='mr-5 flex flex-row gap-3'>
                <button className='bg-black rounded-lg px-4 py-2 text-lg text-white cursor-pointer'>Register</button>
                <button className='bg-black rounded-lg px-4 py-2 text-lg text-white cursor-pointer'>Login</button>
            </div>
        </div>
        </>
    )
}


export default Header;