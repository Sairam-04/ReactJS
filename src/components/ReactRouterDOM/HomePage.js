import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import NavBar from './NavBar';

const HomePage = () => {
    const [showHomePageMessage, setShowHomePageMessage] = useState(false);

    const handleHomeClick = () => {
        setShowHomePageMessage(true);
    };
    return (
        <div>
            <BrowserRouter>
                <NavBar onHomeClick={handleHomeClick} />
                {showHomePageMessage && <p>Welcome to Homepage</p>}
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default HomePage;