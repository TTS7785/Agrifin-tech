import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication status
        axios.get('/api/auth')
            .then(res => setUser(res.data.user))
            .catch(() => navigate('/login'));
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.delete('/api/auth/current');
            navigate('/login');
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

    if (!user) return <div className="centered-page">Loading...</div>;

    return (
        <div className="dashboard-container">
            <nav className="top-bar">
                <span className="welcome-text">Welcome, {user.name}</span>
                <div className="user-info">
                    <span className="role-badge">{user.role}</span>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <main className="main-content">
                <h2>Dashboard</h2>
                {/* Dashboard content will go here */}
            </main>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/login" element={<div className="centered-page"><Login /></div>} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default App;
