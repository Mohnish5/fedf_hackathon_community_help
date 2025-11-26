import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Tag, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const RequestCard = ({ request, onContact }) => {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            layout
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                    background: request.type === 'offer' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                    color: request.type === 'offer' ? 'var(--secondary)' : 'var(--accent)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '2rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                }}>
                    {request.type === 'offer' ? 'Offering Help' : 'Requesting Help'}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} /> {request.timePosted}
                </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{request.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{request.description}</p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={16} /> {request.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Tag size={16} /> {request.category}
                </div>
            </div>

            <Button style={{ width: '100%' }} onClick={() => onContact(request)}>
                <MessageCircle size={18} /> Contact {request.user}
            </Button>
        </motion.div>
    );
};
