import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

const Navbar = () => {
    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('selectedItem');
        Cookies.remove('selectedLocation');
        window.location.href = "/";
    }
    return (
        <div className='bg-[#17A2B8] text-white flex items-center justify-between'>
            <div className='flex items-center'>
                <Link to="https://re4billion.ai/"><h1 className='text-2xl p-4 font-semibold select-none'>RE4BILLION</h1></Link>
                <div className='flex items-center'>
                    <Link to="/admin/db"><h1 className='p-2 select-none'>Dashboard</h1></Link>
                    <Link to="/admin/Alldevices"><h1 className='p-2 select-none'>Status</h1></Link>
                    <Link to="/"><h1 className='p-2 select-none'>Location</h1></Link>
                </div>
            </div>
            <div className='flex items-center gap-4 font-semibold'>
                <button className='p-2 m-4 rounded-lg shadow hover:shadow-lg bg-white text-[#17A2B8] font-semibold' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar