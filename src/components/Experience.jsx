import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
                    Experience & Process
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'var(--bg-card)',
                        '@media (min-width: 768px)': { left: '50%' } // This won't work inline, but layout below is single column for now
                    }} />

                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} style={{
                            marginBottom: '3rem',
                            position: 'relative',
                            paddingLeft: '60px'
                        }}>
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '6px',
                                top: '0',
                                width: '30px',
                                height: '30px',
                                background: 'var(--bg-primary)',
                                border: '2px solid var(--accent-purple)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1
                            }}>
                                <Briefcase size={14} color="var(--accent-purple)" />
                            </div>

                            <div style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-cyan)' }}>{exp.company}</span>
                                    <span>•</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-secondary)' }}>{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
