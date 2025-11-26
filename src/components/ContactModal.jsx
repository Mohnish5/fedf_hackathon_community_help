import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User } from 'lucide-react';
import { Button } from './Button';

export const ContactModal = ({ isOpen, onClose, user }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 100
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            width: '90%',
                            maxWidth: '400px',
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border)',
                            zIndex: 101,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Contact Info</h2>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '50%' }}>
                                    <User size={32} color="var(--primary)" />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{user}</h3>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Community Member</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
                                    <Mail size={20} color="var(--text-muted)" />
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</p>
                                        <p style={{ margin: 0, fontWeight: '500' }}>{user.toLowerCase().replace(' ', '.')}@example.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
                                    <Phone size={20} color="var(--text-muted)" />
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</p>
                                        <p style={{ margin: 0, fontWeight: '500' }}>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={onClose} style={{ width: '100%' }}>Close</Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
