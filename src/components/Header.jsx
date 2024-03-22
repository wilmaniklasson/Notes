import React, { useState, useEffect } from 'react';

const Header = ({ handleToggleDarkMode }) => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    useEffect(() => {
        // Uppdatera temat här
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode)); // Spara i localStorage
    }, [isDarkMode]);

    const tick = () => {
        setCurrentDateTime(new Date());
    };

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options) + ' ' + currentDateTime.toLocaleTimeString();

    return (
        <div className='header'>
            <h1>Notes</h1>
            <div className="datetime">
                <p>{formattedDateTime}</p>
            </div>
            <button
                onClick={() => {
                    setIsDarkMode(previousDarkMode => !previousDarkMode);
                    handleToggleDarkMode(previousDarkMode => !previousDarkMode);
                }}
                className='toggle-mode'
            >
                {isDarkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
            </button>
        </div>
    );
};

export default Header;
