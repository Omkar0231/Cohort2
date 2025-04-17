import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // Access the email passed from Signup page
  const { email } = location.state || {};

  // Redirect to /signup if email not found in state
  useEffect(() => {
    if (!email) {
      navigate('/signup');
    }
  }, [email, navigate]);

  // Autofocus the OTP input on mount
  useEffect(() => {
    document.getElementById('otp')?.focus();
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError('OTP is required');
      return;
    }

    setIsVerifying(true);
    try {
      const response = await axios.post('http://localhost:8000/api/accounts/verify-otp/', {
        email,
        otp,
      });

      console.log('OTP Verified:', response.data);
      alert('Email verified successfully! You can now log in.');
      navigate('/login');
    } catch (err) {
      console.error('OTP verification failed:', err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
        err.response?.data?.detail ||
        'OTP verification failed. Please try again.'
      );
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    try {
      await axios.post('http://localhost:8000/api/accounts/resend-otp/', { email });
      alert('OTP resent successfully!');
    } catch (error) {
      console.error('Resend OTP failed:', error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
        error.response?.data?.detail ||
        'Failed to resend OTP. Try again.'
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Your Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter the OTP sent to your email:{' '}
            <span className="font-medium">{email}</span>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="otp" className="sr-only">
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              required
              placeholder="Enter OTP"
              className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              value={otp}
              onChange={handleOtpChange}
            />
            {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={isVerifying}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isVerifying ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>

          <div className="text-sm text-center">
            Didn't receive the OTP?{' '}
            <span
              onClick={handleResendOtp}
              className={`font-medium text-blue-600 hover:text-blue-500 cursor-pointer ${
                isResending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isResending ? 'Resending...' : 'Resend OTP'}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
