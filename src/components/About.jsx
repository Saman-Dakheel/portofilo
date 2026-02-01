import React from 'react';
import { ABOUT_DATA } from '../data';

const About = () => {
    const { title, text, highlights } = ABOUT_DATA;

    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    {title}
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        {text}
                    </p>
                </div>

                <div className="grid-highlights" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {highlights.map((item, index) => (
                        <div key={index} style={{
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <item.icon className={item.color} size={32} />
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
