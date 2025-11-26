import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RequestCard } from './components/RequestCard';
import { CreateRequestModal } from './components/CreateRequestModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Search, Filter } from 'lucide-react';
import './App.css';

const MOCK_REQUESTS = [
  {
    id: 1,
    type: 'request',
    title: 'Need help moving a sofa',
    description: 'I just bought a new sofa and need help carrying it up to the second floor. Will provide pizza!',
    location: 'Maplewood District',
    category: 'Labor',
    user: 'Sarah J.',
    timePosted: '2h ago'
  },
  {
    id: 2,
    type: 'offer',
    title: 'Offering Math Tutoring',
    description: 'I am a retired math teacher available to help high school students with Algebra and Calculus.',
    location: 'Community Library',
    category: 'Education',
    user: 'Robert M.',
    timePosted: '5h ago'
  },
  {
    id: 3,
    type: 'request',
    title: 'Lost Cat - Please Help Search',
    description: 'My orange tabby "Garfield" went missing yesterday. He is friendly but shy. Please help me look for him.',
    location: 'Sunset Park',
    category: 'General',
    user: 'Emily R.',
    timePosted: '1d ago'
  },
  {
    id: 4,
    type: 'offer',
    title: 'Tech Support for Seniors',
    description: 'Free help with setting up smartphones, tablets, and computers for seniors in the neighborhood.',
    location: 'Senior Center',
    category: 'Tech Support',
    user: 'David K.',
    timePosted: '1d ago'
  }
];

function App() {
  const [requests, setRequests] = useState(MOCK_REQUESTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('request');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedContactUser, setSelectedContactUser] = useState('');

  const handlePostRequest = (newRequest) => {
    setRequests([newRequest, ...requests]);
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleContact = (request) => {
    setSelectedContactUser(request.user);
    setContactModalOpen(true);
  };

  const filteredRequests = requests.filter(req => {
    const matchesSearch = req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || req.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar onPostRequest={() => openModal('request')} />

      <main className="app-main">
        <Hero
          onGetStarted={() => {
            const feed = document.getElementById('feed');
            if (feed) feed.scrollIntoView({ behavior: 'smooth' });
          }}
          onOfferHelp={() => openModal('offer')}
        />

        <div className="container" id="feed">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', margin: 0 }}>Community Feed</h2>
              <div style={{ color: 'var(--text-muted)' }}>
                Showing {filteredRequests.length} active posts
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 3rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-main)'
                  }}
                />
              </div>

              <div style={{ position: 'relative', minWidth: '150px' }}>
                <Filter size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 3rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-main)',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="All">All Categories</option>
                  <option value="General">General</option>
                  <option value="Labor">Labor</option>
                  <option value="Tech Support">Tech Support</option>
                  <option value="Education">Education</option>
                  <option value="Transport">Transport</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid-feed">
            {filteredRequests.length > 0 ? (
              filteredRequests.map(req => (
                <RequestCard key={req.id} request={req} onContact={handleContact} />
              ))
            ) : (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                <p>No requests found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <CreateRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostRequest}
        initialType={modalType}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        user={selectedContactUser}
      />

      <Footer />
    </>
  );
}

export default App;
