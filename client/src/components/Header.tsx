import { useState } from 'react';
import Modal from './Modal';

const Header = () => {
    // Function to open sign up / sign in modal
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<'signin' | 'signup'>('signin');

    const handleModal = () => {
        
    }

    // Function to sign out of account added here later
    const handleSignOut = async () => {
       try {
        const response = await fetch('/api/users/signout', {
            method: 'POST',
            headers: { 'Conetnt-type': 'application/json'}
        })

        const result = await response.json();

        if (response.ok) {
            //Redirect to landing page
        }
       } catch (err) {
        console.error('Network or server-side error: ', err); 
       }
    }

    return (
        <div className = "fixed top-0 bg-gradient-to-r from-orange-300 to-emerald-200/80 bg-blend-saturation w-full flex flex-row shadow-md justify-between items-center p-2 z-50">
            {/* Left Side of Navbar */}
            <div className = "w-1/3 flex justify-start items-center">
                <h1 className = "text-xl text-black">Welcome to PrepTime!</h1>
            </div>

            {/* Center of Navbar */}
            <div className = "flex-none w-1/3 flex justify-center">
                <img src="/images/preptime-logo.png" alt="PrepTime Logo" className = "h-20 w-auto max-w-full"/>
            </div>

            {/* Right Side of Navbar */}
            <div className = "w-1/3 flex justify-end items-center space-x-4">
                {/* Needs conditional rendering later on. Currently adding all buttons needed to the Navbar and will fix later*/}
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

export default Header;