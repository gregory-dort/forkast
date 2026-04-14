import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersApi } from '../apis/api';

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await usersApi.post('/signin', { email, password });

            setMessage(response.data.message);
            setEmail("");
            setPassword("");
            navigate('/home');

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred during sign in. Please try again.');
            } else {
                setError('Unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className = "">
            <h2 className = "">Sign In</h2>
            {/* Form */}
            <form onSubmit={handleSubmit} className = "">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className=""
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className=""
                />
                <button
                    type="submit"
                    className=""
                >
                    Sign In
                </button>
            </form>
            {/* Display success / error message */}
            {message && <div className = "">{message}</div>}
            {error && <div className = "">{error}</div>}
        </div>
    );
};

export default SignInForm;