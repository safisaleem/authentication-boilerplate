import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function ApplicationPage() {
    const { state } = useLocation();
    const token = state?.token;
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            setTimeout(() => {
                navigate('/signin');
            }, 3000);
        }
    }, []);

    const handleLogout = () => {
        navigate('/signin');
    };

    return (
        <div className="container mt-4">
            {token ? (
                <div>
                    <h2>Welcome to the application.</h2>
                    <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <h2>You must be logged in. Redirecting you to sign up.</h2>
            )}
        </div>
    );
}

export default ApplicationPage;
