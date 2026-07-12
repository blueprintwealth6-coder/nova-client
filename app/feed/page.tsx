import React from 'react';
import Sidebar from '@/components/Sidebar'; // Sidebar import kiya

export default function FeedPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0b0f19' }}>
      
      {/* 1. Left side par aapka sidebar dikhega */}
      <Sidebar />

      {/* 2. Right side par aapka main Feed content block */}
      <main style={{ 
        marginLeft: '260px', // Takki content sidebar ke pichay na chupe
        flex: 1, 
        padding: '40px',
        color: '#ffffff' 
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Video Feed</h1>
        
        {/* Yahan aapka baki ka video layout ya feeds ka code ayega */}
        <p style={{ color: '#94a3b8' }}>Videos coming soon...</p>

      </main>
      {/* FLOATING NAVIGATION BUTTONS ON RIGHT SIDE */}
<div style={{
  position: 'fixed',
  right: '40px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  zIndex: 1000
}}>
  {/* UP BUTTON */}
  <button 
    onClick={() => window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })}
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      fontSize: '22px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#00d2ff';
      e.currentTarget.style.borderColor = '#00d2ff';
      e.currentTarget.style.transform = 'scale(1.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    ↑
  </button>

  {/* DOWN BUTTON */}
  <button 
    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      fontSize: '22px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#0066ff';
      e.currentTarget.style.borderColor = '#0066ff';
      e.currentTarget.style.transform = 'scale(1.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    ↓
  </button>
</div>

    </div>
  );
}
