import React from 'react';
import './login.css'; // Component-specific styles
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Step 3: onChange Handlers
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Login Successful')
                navigate('/Dashboard', { state: { username } });
            }
            else {
                setError(data.message)
                alert('Invalid username or password🥲')
            }
        }
        catch (err) {
            setError('Something went wrong')
        }
    }


    return (
        <div className="login-container">
            <div className="background-text">EVR</div>
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username" required
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password" required
                            value={password}
                            onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
