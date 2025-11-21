import { useState } from 'react';

const SideNavbar = () => {
    // Function to open sign up / sign in modal


    return (
        <div className = "fixed margin-left-0 bg-gradient-to-r from-orange-300 to-emerald-200/80 bg-blend-saturation h-screen w-64 flex flex-col shadow-md justify-between items-center p-2 z-50">
            <div className = "flex justify-center text-center">
                <h2 className = "text-xl text-black">Welcome to PrepTime!</h2>
            </div>

            <div className = "flex justify-center text-center">
                <h2 className = "text-xl text-black">Welcome to PrepTime!</h2>
            </div>

            <div className = "w-1/3 flex justify-end items-center space-x-4">
                 <button
                    onClick = {handleModal}
                    className = "text-black px-4 py-2 font-medium rounded-md bg-white hover:scale-110 transition ease-in-out duration-900"
                >Sign Up</button>
                <button
                    onClick = {handleSignOut}
                    className = "text-black px-4 py-2 font-medium rounded-md bg-white hover:scale-110 transition ease-in-out duration-900"
                >Sign Out</button>
            </div>
        </div>
    )
}

export default SideNavbar;