import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Tag, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const RequestCard = ({ request, onContact, onClick }) => {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            layout
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className={`badge ${request.type === 'offer' ? 'badge-offer' : 'badge-request'}`}>
                    {request.type === 'offer' ? 'Offering Help' : 'Requesting Help'}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} /> {request.timePosted}
                </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: '1.4', fontWeight: '700' }}>{request.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {request.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={16} /> {request.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Tag size={16} /> {request.category}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>
                        {request.user.charAt(0)}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{request.user}</span>
                </div>

                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        onContact(request);
                    }}
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                    Contact
                </Button>
            </div>
        </motion.div>
    );
};
