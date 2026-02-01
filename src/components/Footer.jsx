import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Alex Developer. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
