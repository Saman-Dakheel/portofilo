import React from 'react';
import { SKILLS_DATA } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Skills & Technologies
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {SKILLS_DATA.map((cat, index) => (
                        <div key={index}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-cyan)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                                {cat.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {cat.skills.map((skill, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-primary)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
