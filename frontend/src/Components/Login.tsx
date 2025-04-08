import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

// Define the login schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

// Type for validation errors
type FormErrors = {
  email?: string[];
  password?: string[];
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
const navigate= useNavigate();
  const validateForm = () => {
    try {
      loginSchema.parse({ email, password });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormErrors;
          if (!formattedErrors[path]) {
            formattedErrors[path] = [];
          }
          formattedErrors[path]?.push(err.message);
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });
      localStorage.setItem("isAuthenticated","true");
      alert(response.data.message)
      navigate("/success")
    } catch (error) {
        localStorage.setItem("isAuthenticated","false");
      alert("Login failed")
      navigate("/")
      console.error('Login failed:', error);
      // Handle error here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
     <div className="w-full max-w-sm space-y-8 bg-white p-8 rounded-xl shadow-md">

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back!</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="email"
                />
              </div>
              {errors.email && (
                <div className="mt-1 text-sm text-red-600">
                  {errors.email.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
                />
              </div>
              {errors.password && (
                <div className="mt-1 text-sm text-red-600">
                  {errors.password.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 rounded-md text-white bg-[#2b366f] hover:bg-[#1e2554] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
               >
            {loading ? 'Logging...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;