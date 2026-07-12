import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 8%',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(10px)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          fontSize: '28px',
          fontWeight: 800,
          letterSpacing: '2px',
          background: 'linear-gradient(to right, #00d2ff, #0066ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          NOVA
        </div>
        <nav>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: '30px', fontWeight: 500 }}>Home</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: '30px', fontWeight: 500 }}>Trending</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: '30px', fontWeight: 500 }}>Creators</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', marginLeft: '30px', fontWeight: 500 }}>About</a>
        </nav>
      </header>

      {/* MAIN HERO SECTION */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '180px 20px 80px 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{ fontSize: '64px', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}>
          The Future of{' '}
          <span style={{
            background: 'linear-gradient(to right, #00d2ff, #0066ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Short Videos
          </span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '40px', maxWidth: '650px' }}>
          Watch millions of amazing short videos, upload your own creative content, connect with top creators, and grow your global audience on NOVA.
        </p>
        
        {/* BUTTONS */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
          <a href="#" style={{
            padding: '14px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '50px', textDecoration: 'none',
            background: 'linear-gradient(45deg, #00d2ff, #0066ff)', color: 'white', boxShadow: '0 4px 15px rgba(0, 210, 255, 0.4)'
          }}>
            ► Start Watching
          </a>
          <a href="#" style={{
            padding: '14px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '50px', textDecoration: 'none',
            background: 'transparent', color: 'white', border: '2px solid rgba(255, 255, 255, 0.2)'
          }}>
            Login
          </a>
          <a href="#" style={{
            padding: '14px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '50px', textDecoration: 'none',
            background: 'white', color: 'black'
          }}>
            Sign Up
          </a>
        </div>

        {/* STATS COUNTER */}
        <div style={{
          display: 'flex', gap: '60px', background: 'rgba(255, 255, 255, 0.03)', padding: '20px 50px',
          borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', color: '#00d2ff', marginBottom: '5px' }}>10M+</h3>
            <p style={{ fontSize: '14px', color: '#64748b' }}>Videos</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', color: '#00d2ff', marginBottom: '5px' }}>1M+</h3>
            <p style={{ fontSize: '14px', color: '#64748b' }}>Creators</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', color: '#00d2ff', marginBottom: '5px' }}>100+</h3>
            <p style={{ fontSize: '14px', color: '#64748b' }}>Countries</p>
          </div>
        </div>
      </section>

      {/* NEW FEATURES GRID SECTION */}
      <section style={{ padding: '80px 8%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '50px' }}>Why Choose NOVA?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {/* Card 1 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 30px', borderRadius: '20px' }}>
            <span style={{ fontSize: '40px', marginBottom: '20px', display: 'inline-block' }}>⚡</span>
            <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#f8fafc' }}>Lightning Fast</h3>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.5 }}>Enjoy buffer-free streaming with our advanced short video optimization tech.</p>
          </div>
          {/* Card 2 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 30px', borderRadius: '20px' }}>
            <span style={{ fontSize: '40px', marginBottom: '20px', display: 'inline-block' }}>🎨</span>
            <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#f8fafc' }}>Creator Tools</h3>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.5 }}>Built-in filter tools and background music library to enhance your videos easily.</p>
          </div>
          {/* Card 3 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 30px', borderRadius: '20px' }}>
            <span style={{ fontSize: '40px', marginBottom: '20px', display: 'inline-block' }}>🎁</span>
            <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#f8fafc' }}>Earn Rewards</h3>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.5 }}>Get recognized and monetize your engagement directly through our platform.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontSize: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', background: '#090d16' }}>
        <p>&copy; 2026 NOVA Inc. All rights reserved. Built for the next generation.</p>
      </footer>
    </>
  );
}
