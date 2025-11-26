import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar = ({ onPostRequest }) => {
    return (
        <header className="app-header">
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', fontSize: '1.5rem', color: 'var(--text-main)' }}>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex' }}>
                        <Heart size={24} color="white" fill="white" />
                    </div>
                    <span>CommunityHelp</span>
                </div>

                <nav style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="secondary" onClick={() => window.scrollTo({ top: document.getElementById('feed').offsetTop, behavior: 'smooth' })}>
                        Browse Requests
                    </Button>
                    <Button onClick={onPostRequest}>
                        Post a Request
                    </Button>
                </nav>
            </div>
        </header>
    );
};
