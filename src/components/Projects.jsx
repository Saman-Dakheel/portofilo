import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Featured Projects
                </h2>

                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {PROJECTS_DATA.map((project, index) => (
                        <div key={index} className="project-card" style={{
                            background: 'var(--bg-card)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href={project.links.code} style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                                        <a href={project.links.demo} style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    {project.desc}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.8rem',
                                            color: 'var(--accent-cyan)',
                                            background: 'rgba(0, 243, 255, 0.1)',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '100px'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
