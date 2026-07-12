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
    </div>
  );
}
