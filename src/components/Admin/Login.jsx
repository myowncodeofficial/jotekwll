import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(password)) {
            navigate('/control-center-8b3');
        } else {
            setError('Invalid master password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card glass">
                <img src="/assets/logo.svg" alt="JOTEK" className="login-logo" />
                <h2>Admin Access</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Master Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="btn-primary">Login</button>
                    <button type="button" onClick={() => navigate('/')} className="btn-text">Back to Home</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
