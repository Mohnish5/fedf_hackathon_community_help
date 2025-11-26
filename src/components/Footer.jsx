import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-card)',
            padding: '2rem 0',
            marginTop: '4rem',
            borderTop: '1px solid var(--border)'
        }}>
            <div className="container" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span>Made with</span>
                    <Heart size={16} fill="var(--primary)" color="var(--primary)" />
                    <span>for the Community</span>
                </div>
                <p>&copy; {new Date().getFullYear()} CommunityHelp. All rights reserved.</p>
            </div>
        </footer>
    );
};
