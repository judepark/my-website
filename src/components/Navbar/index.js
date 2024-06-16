import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

import * as style from './navbar.module.css';

export default function Navbar() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!isLoaded) {
        return null; // or a loading spinner, if you prefer
    }

    return (
        <nav className={style.navbar}>
            <div className="links">
                <h5>
                    <Link to="/"><img src={'/logo.svg'} alt="Logo" /></Link>
                    <Link to="/work">WORK</Link>
                    <Link to="/essay">ESSAYS</Link>
                    <Link to="/about">ABOUT</Link>
                </h5>
            </div>
        </nav>
    );
}
