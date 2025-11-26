import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Users, Shield, Zap } from 'lucide-react';

export const Hero = ({ onGetStarted, onOfferHelp }) => {
    return (
        <section className="hero-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="hero-title">
                        Connect. Collaborate.<br />
                        Change Your Community.
                    </h1>
                    <p className="hero-subtitle">
                        A smart local collaboration platform connecting neighbors who need help with those ready to offer it. Secure, fast, and impactful.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
                        <Button onClick={onGetStarted} style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Find Help Now <ArrowRight size={20} />
                        </Button>
                        <Button variant="secondary" onClick={onOfferHelp} style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Offer Assistance
                        </Button>
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <FeatureCard
                        icon={<Users size={32} color="var(--secondary)" />}
                        title="Community First"
                        desc="Built for neighbors to help neighbors. Strengthen local bonds."
                    />
                    <FeatureCard
                        icon={<Shield size={32} color="var(--primary)" />}
                        title="Verified Trust"
                        desc="Safe interactions with community verification systems."
                    />
                    <FeatureCard
                        icon={<Zap size={32} color="var(--accent)" />}
                        title="Instant Match"
                        desc="Smart algorithms connect you with the right help instantly."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        className="card"
        whileHover={{ y: -5 }}
        style={{ textAlign: 'left' }}
    >
        <div style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '50%' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)' }}>{desc}</p>
    </motion.div>
);
