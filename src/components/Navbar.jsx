import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Dev<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', '@media (max-width: 768px)': { display: 'none' } }}>
                    {/* Note: Media queries in inline styles don't work, using class for responsiveness below */}
                    <style>
                        {`
               .desktop-menu { display: flex; gap: 2rem; }
               .mobile-toggle { display: none; }
               .mobile-menu { display: none; }
               
               @media (max-width: 768px) {
                 .desktop-menu { display: none; }
                 .mobile-toggle { display: block; font-size: 1.5rem; }
                 .mobile-menu { 
                    display: flex; 
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: var(--bg-secondary);
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                 }
               }
             `}
                    </style>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'var(--text-primary)' }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    padding: '1rem 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
