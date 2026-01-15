import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth', { email, password });
            if (response.status === 200) {
                console.log('Login successful:', response.data);
                navigate('/'); // Redirect to home/dashboard on success
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="card">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;
