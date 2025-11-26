import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Tag, MessageCircle, User, Heart, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const RequestDetailsModal = ({ isOpen, onClose, request, onContact }) => {
    if (!request) return null;

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
                            background: 'rgba(0,0,0,0.8)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 100
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.95, y: 20, x: "-50%" }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            width: '95%',
                            maxWidth: '700px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            background: 'var(--bg-card)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--glass-border)',
                            zIndex: 101,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        {/* Header Image / Map Placeholder */}
                        <div style={{
                            height: '200px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.3,
                                mixBlendMode: 'overlay'
                            }} />
                            <MapPin size={48} color="white" style={{ opacity: 0.8 }} />

                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: 'none',
                                    color: 'white',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(4px)'
                                }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            {/* Header Info */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div>
                                    <span className={`badge ${request.type === 'offer' ? 'badge-offer' : 'badge-request'}`} style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                                        {request.type === 'offer' ? 'Offering Help' : 'Requesting Help'}
                                    </span>
                                    <h2 style={{ fontSize: '2rem', margin: '0.5rem 0', lineHeight: 1.2 }}>{request.title}</h2>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={16} /> {request.timePosted}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={16} /> {request.location}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Tag size={16} /> {request.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* User Info */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: 'var(--radius-lg)',
                                marginBottom: '2rem',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}>
                                    {request.user.charAt(0)}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{request.user}</h3>
                                        <ShieldCheck size={16} color="var(--secondary)" />
                                    </div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Community Member • 12 Helps Given</p>
                                </div>
                                <Button onClick={() => onContact(request)}>
                                    Contact
                                </Button>
                            </div>

                            {/* Description */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Description</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{request.description}</p>
                            </div>

                            {/* Comments Section */}
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MessageCircle size={20} /> Community Discussion
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={16} /></div>
                                        <div>
                                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '0 1rem 1rem 1rem', border: '1px solid var(--glass-border)' }}>
                                                <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.25rem', color: 'var(--secondary)' }}>Mike T.</p>
                                                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>I can help with this! Are you available this weekend?</p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>
                                                <span>1h ago</span>
                                                <span style={{ cursor: 'pointer' }}>Reply</span>
                                                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Heart size={12} /> 2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={16} /></div>
                                        <div>
                                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '0 1rem 1rem 1rem', border: '1px solid var(--glass-border)' }}>
                                                <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.25rem', color: 'var(--accent)' }}>Lisa M.</p>
                                                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Is this still needed? I have a truck if transportation is required.</p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>
                                                <span>30m ago</span>
                                                <span style={{ cursor: 'pointer' }}>Reply</span>
                                                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Heart size={12} /> 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
