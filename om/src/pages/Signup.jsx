import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CaptchaBox from '../components/auth/CaptchaBox';
import PasswordInput from '../components/ui/PasswordInput';

const Signup = () => {
    const [captchaVisible, setCaptchaVisible] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [phoneOtpSent, setPhoneOtpSent] = useState(false);
    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [emailOtp, setEmailOtp] = useState('');
    const [phoneOtpError, setPhoneOtpError] = useState('');
    const [emailOtpError, setEmailOtpError] = useState('');
    const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);
    const [emailOtpVerified, setEmailOtpVerified] = useState(false);
    const [phoneTimer, setPhoneTimer] = useState(0);
    const [emailTimer, setEmailTimer] = useState(0);
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const dummyOtp = '123456';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            alert('Please complete the CAPTCHA');
            return;
        }

        if (!phoneOtpVerified || !emailOtpVerified) {
            alert('Please verify both phone and email OTPs');
            return;
        }

        // Submit logic
        alert('Signup successful');
    };

    const handleSendPhoneOtp = () => {
        // alert('OTP sent to your phone!');
        setPhoneOtpSent(true);
        setPhoneTimer(59); // Start the 59-second timer
    };


    const handleVerifyPhoneOtp = () => {
        if (phoneOtp === dummyOtp) {
            setPhoneOtpVerified(true);
            setPhoneOtpError('');  // Clear error message if OTP is correct
        } else {
            setPhoneOtpError('Invalid Phone OTP. Please try again.');
        }
    };

    React.useEffect(() => {
        if (!phoneOtpSent || phoneTimer <= 0) return;

        const interval = setTimeout(() => {
            setPhoneTimer((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(interval);
    }, [phoneTimer, phoneOtpSent]);

    const handleSendEmailOtp = () => {
        // alert('OTP sent to your email!');
        setEmailOtpSent(true);
        setEmailTimer(59); // Start the 59-second timer
    };


    const handleVerifyEmailOtp = () => {
        if (emailOtp === dummyOtp) {
            setEmailOtpVerified(true);
            setEmailOtpError('');  // Clear error message if OTP is correct
        } else {
            setEmailOtpError('Invalid Email OTP. Please try again.');
        }
    };

    React.useEffect(() => {
        if (!emailOtpSent || emailTimer <= 0) return;

        const interval = setTimeout(() => {
            setEmailTimer((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(interval);
    }, [emailTimer, emailOtpSent]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                <input type="text" placeholder="Name" className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />

                {/* Phone Number */}
                {/* Phone Number */}
                <div className="mb-2 w-full flex items-center gap-2">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {!phoneOtpVerified && !phoneOtpSent && (
                        <button
                            type="button"
                            className="px-3 py-2 text-sm bg-blue-600 text-white rounded rounded transform -translate-y-2"
                            onClick={handleSendPhoneOtp}
                        >
                            OTP
                        </button>
                    )}
                    {phoneOtpSent && !phoneOtpVerified && (
                        <span className="text-sm text-gray-500 rounded transform -translate-y-2">
                            {phoneTimer > 0 ? `Resend in 00:${phoneTimer < 10 ? `0${phoneTimer}` : phoneTimer}` : (
                                <button
                                    type="button"
                                    className="px-3 py-2 text-sm bg-blue-600 text-white rounded rounded transform -translate-y-2"
                                    onClick={handleSendPhoneOtp}
                                >
                                    Resend OTP
                                </button>
                            )}
                        </span>
                    )}
                </div>

                {/* OTP Input appears below */}
                {phoneOtpSent && !phoneOtpVerified && (
                    <div className="mb-2 w-full flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Enter Phone OTP"
                            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={phoneOtp}
                            onChange={(e) => setPhoneOtp(e.target.value)}
                        />
                        <button
                            type="button"
                            className="px-3 py-2 text-sm bg-green-600 text-white rounded rounded transform -translate-y-2"
                            onClick={handleVerifyPhoneOtp}
                        >
                            Verify
                        </button>
                    </div>
                )}

                {phoneOtpError && (
                    <p className="text-red-500 text-sm mt-1 transform -translate-y-6 ml-3">{phoneOtpError}</p>
                )}

                {phoneOtpVerified && (
                    <p className="text-green-600 text-sm mb-2">Phone OTP verified ✅</p>
                )}

                {/* EMAIL */}
                {/* EMAIL */}
                <div className="mb-2 w-full flex items-center gap-2">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {!emailOtpVerified && !emailOtpSent && (
                        <button
                            type="button"
                            className="px-3 py-2 text-sm bg-blue-600 text-white rounded rounded transform -translate-y-2"
                            onClick={handleSendEmailOtp}
                        >
                            OTP
                        </button>
                    )}
                    {emailOtpSent && !emailOtpVerified && (
                        <span className="text-sm text-gray-500 rounded transform -translate-y-2">
                            {emailTimer > 0 ? `Resend in 00:${emailTimer < 10 ? `0${emailTimer}` : emailTimer}` : (
                                <button
                                    type="button"
                                    className="px-3 py-2 text-sm bg-blue-600 text-white rounded rounded transform -translate-y-2"
                                    onClick={handleSendEmailOtp}
                                >
                                    Resend OTP
                                </button>
                            )}
                        </span>
                    )}
                </div>

                {emailOtpSent && !emailOtpVerified && (
                    <div className="mb-2 w-full flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Enter Email OTP"
                            className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={emailOtp}
                            onChange={(e) => setEmailOtp(e.target.value)}
                        />
                        <button
                            type="button"
                            className="px-3 py-2 text-sm bg-green-600 text-white rounded rounded transform -translate-y-2"
                            onClick={handleVerifyEmailOtp}
                        >
                            Verify
                        </button>
                    </div>
                )}

                {emailOtpError && (
                    <p className="text-red-500 text-sm mt-1 transform -translate-y-6 ml-3">{emailOtpError}</p>
                )}

                {emailOtpVerified && (
                    <p className="text-green-600 text-sm mb-2">Email OTP verified ✅</p>
                )}

                <PasswordInput
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                />
                <PasswordInput
                    placeholder="Retype Password"
                    value={retypePassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                    name="retypePassword"
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

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 disabled:opacity-50 hover:bg-green-700 transition duration-300"
                    disabled={!captchaVerified}
                >
                    Sign Up
                </button>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
