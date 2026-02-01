import React, { useRef } from 'react';
import { Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

const Contact = () => {
    /* 
       To connect this to EmailJS:
       1. npm install @emailjs/browser
       2. Uncomment and configure below:
       
       import emailjs from '@emailjs/browser';
       const form = useRef();
       
       const sendEmail = (e) => {
         e.preventDefault();
         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
           .then((result) => {
               console.log(result.text);
               alert("Message Sent!");
           }, (error) => {
               console.log(error.text);
           });
       };
    */

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for the message! To make this form functional, uncomment the EmailJS code in src/components/Contact.jsx");
    };

    return (
        <section id="contact" className="section bg-secondary">
            <div className="container">
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Get In Touch
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's work together</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>


                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                            {SOCIAL_LINKS.map((link, i) => {
                                const isMail = link.url.startsWith('mailto');
                                return (
                                    <a key={i} href={link.url}
                                        target={isMail ? undefined : "_blank"}
                                        rel={isMail ? undefined : "noopener noreferrer"}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            padding: '1rem',
                                            borderRadius: '50%',
                                            transition: '0.2s',
                                            color: 'var(--text-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        }}
                                        title={link.name}
                                    >
                                        <link.icon size={24} className={link.name === 'Email' ? "text-accent-cyan" : ""} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="John Doe"
                                required
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="john@example.com"
                                required
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Tell me about your project..."
                                required
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
