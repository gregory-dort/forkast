import axios from 'axios';
import { useState } from 'react';
import { usersApi } from '../apis/api';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await usersApi.post('/signup', { email, password, name });

            setMessage(response.data.message);
            setEmail('');
            setName('');
            setPassword('');

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'An error occurred during sign up. Please try again.');
            } else {
                setError('Unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className = "">
            <h2 className = "">Create an Account</h2>
            {/* Form */}
            <form onSubmit={handleSubmit} className = "">
                <input
                    type='text'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className=""
                />
                <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className=""
                />
                <input
                    type='password'
                    placeholder='Create your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className=""
                />
                <button
                    type='submit'
                    className=""
                >
                    Sign Up
                </button>
            </form>
            {/* Display success / error message */}
            {message && <div className = "">{message}</div>}
            {error && <div className = "">{error}</div>}
        </div>
    );
};

export default SignUpForm;