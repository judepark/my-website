import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import * as style from './layout.module.css';

export default function Layout({ children }) {
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
        <div className={style.layout}>
            <div className="container">
                <Navbar />
            </div>

            <div className={style.content}>
                <div>{children}</div>
            </div>

            <footer>
                <div>
                    <div className={style.disclaimer}>
                        <div style={{marginBottom: '24px', marginRight: '10px', color: 'hsla(0, 0%, 0%, 0.45)'}}>ⓒ 2024 Jude Park</div>
                        <div style={{marginBottom: '24px', marginRight: '10px', color: 'hsla(0, 0%, 0%, 0.45)'}}>
                            Built on{' '}
                            <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener">Gatsby</a>
                        </div>
                        <div style={{marginBottom: '24px', marginRight: '10px', color: 'hsla(0, 0%, 0%, 0.45)'}}>
                            Deployed on{' '}
                            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener">Netlify</a>
                        </div>
                        <div style={{marginBottom: '24px', color: 'hsla(0, 0%, 0%, 0.45)'}}>
                            Icons by{' '}
                            <a href="https://icons8.com" target="_blank" rel="noreferrer noopener">Icons8</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
