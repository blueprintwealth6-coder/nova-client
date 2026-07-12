import React from 'react';

export default function Logo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      userSelect: 'none'
    }}>
      {/* Dynamic Animated Play Icon Shape */}
      <div style={{
        position: 'relative',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #00d2ff 0%, #0066ff 100%)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 15px rgba(0, 210, 255, 0.5)',
      }}>
        {/* Play triangle inside */}
        <div style={{
          width: '0',
          height: '0',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: '14px solid white',
          marginLeft: '4px'
        }} />
      </div>

      {/* Futuristic Styled Text */}
      <span style={{
        fontSize: '28px',
        fontWeight: 900,
        letterSpacing: '3px',
        background: 'linear-gradient(to right, #ffffff 60%, #00d2ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textTransform: 'uppercase',
      }}>
        Nova
      </span>
    </div>
  );
}
