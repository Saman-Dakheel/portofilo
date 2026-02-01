import React from 'react';
import { HERO_DATA } from '../data';

const Hero = () => {
    const { greeting, role, description, linkToProjects, linkToContact } = HERO_DATA;

    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--accent-purple)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-cyan)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container" style={{ zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <p style={{
                        color: 'var(--accent-cyan)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        letterSpacing: '0.05em'
                    }}>
                        {greeting}
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        <span className="text-gradient">{role}</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px'
                    }}>
                        {description}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href={linkToProjects} className="btn btn-primary">
                            View Projects
                        </a>
                        <a href={linkToContact} className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
