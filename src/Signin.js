import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from './api/auth';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await signIn(formData);
            navigate('/', {state: {token}});
        } catch (error) {
            console.error(error.message);
            setError('Sign-in failed. Please try again.');
        }
    };

    return (
        // <div className="container mt-4">
        //     <h2>Sign In</h2>
        //     {error && <div className="alert alert-danger" role="alert">{error}</div>}
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label">Email:</label>
        //             <input
        //                 type="email"
        //                 name="email"
        //                 value={formData.email}
        //                 onChange={handleChange}
        //                 className="form-control"
        //                 id="email"
        //                 required
        //             />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">Password:</label>
        //             <input
        //                 type="password"
        //                 name="password"
        //                 value={formData.password}
        //                 onChange={handleChange}
        //                 className="form-control"
        //                 id="password"
        //                 required
        //             />
        //         </div>
        //         <button type="submit" className="btn btn-primary">Sign In</button>
        //     </form>
        // </div>
        
        <div className="Auth-form-container">
        <form onSubmit={handleSubmit} className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <div className="text-center mt-3">
            Don&apos;t have an account?{" "}
            <span className="link-primary" onClick={() => {navigate('/signup')}}>
              Sign up
            </span>
          </div>
          </div>
          
        </form>
      </div>
    );
}

export default SignIn;
