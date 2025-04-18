import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // To link to the Signup page
import CaptchaBox from '../components/auth/CaptchaBox';
import PasswordInput from '../components/ui/PasswordInput';

const Login = () => {
    const [captchaVisible, setCaptchaVisible] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            // alert('Please complete the CAPTCHA');
            return;
        }
        // alert('Login successful');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Log In</h2>

                {/* Input Fields */}
                <input
                    type="email"
                    placeholder="Phone or Email"
                    className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <PasswordInput
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                />

                {/* CAPTCHA Button */}
                {!captchaVisible && (
                    <button
                        type="button"
                        onClick={() => setCaptchaVisible(true)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Verify Captcha
                    </button>
                )}

                {captchaVisible && (
                    <div className="mt-4">
                        <CaptchaBox onChange={() => setCaptchaVerified(true)} />
                    </div>
                )}

                {/* Log In Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 disabled:opacity-50 hover:bg-green-700 transition duration-300"
                    disabled={!captchaVerified}
                >
                    Log In
                </button>

                {/* Signup Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
