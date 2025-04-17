import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student', // Default role
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log('Form validation failed.');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Submitting registration data...');
      const res = await axios.post('http://localhost:8000/api/register/', formData, { // Sending formData directly
        headers: {
          'Content-Type': 'application/json', // Adjust content type if your backend expects JSON
        },
      });
      console.log('Registration successful:', res.data);
      alert('Registration successful! Please check your email to verify your OTP.');
      console.log('Navigating to /verify-otp with email:', formData.email);
      navigate('/verify-otp', { state: { email: formData.email } });
    } catch (err) {
      console.error('Registration failed:', err.response?.data || err.message);
      setErrors(err.response?.data || { general: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
      console.log('Submission process completed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input id="firstName" name="firstName" type="text" autoComplete="given-name" required className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-1 sm:text-sm ${errors.firstName ? 'border-red-500' : ''}`} placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input id="lastName" name="lastName" type="text" autoComplete="family-name" required className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-1 sm:text-sm ${errors.lastName ? 'border-red-500' : ''}`} placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-1 sm:text-sm ${errors.email ? 'border-red-500' : ''}`} placeholder="Email address" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-1 sm:text-sm ${errors.password ? 'border-red-500' : ''}`} placeholder="Password" value={formData.password} onChange={handleChange} />
              {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="confirm-password" required className={`appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-1 sm:text-sm ${errors.confirmPassword ? 'border-red-500' : ''}`} placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            <div>
              <label htmlFor="role" className="sr-only">Role</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange} className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-1 sm:text-sm`}>
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
          {errors.general && <p className="mt-3 text-red-500 text-sm text-center">{errors.general}</p>}
          <div className="text-sm text-center">
            Already have an account?{' '}
            <span onClick={() => navigate('/login')} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
              Log in
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;