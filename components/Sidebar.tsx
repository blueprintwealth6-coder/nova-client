import React from 'react';
import Link from 'next/link';
import { 
  Home, Search, Upload, Bell, 
  MessageSquare, Bookmark, User, Settings 
} from 'lucide-react'; // Icons ke liye simple library

export default function Sidebar() {
  const menuItems = [
    { name: 'Home', icon: <Home size={22} />, path: '/' },
    { name: 'Search', icon: <Search size={22} />, path: '/search' },
    { name: 'Upload', icon: <Upload size={22} />, path: '/upload' },
    { name: 'Notifications', icon: <Bell size={22} />, path: '/notifications' },
    { name: 'Messages', icon: <MessageSquare size={22} />, path: '/messages' },
    { name: 'Saved', icon: <Bookmark size={22} />, path: '/saved' },
    { name: 'Profile', icon: <User size={22} />, path: '/profile' },
    { name: 'Settings', icon: <Settings size={22} />, path: '/settings' },
  ];

  return (
    <aside style={{
      width: '260px',
      height: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '30px 24px',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      borderRight: '1px solid #1e293b',
      boxSizing: 'border-box',
      zIndex: 100
    }}>
      {/* Brand Logo */}
      <div style={{
        fontSize: '32px',
        fontWeight: 900,
        color: '#ff007f', // Pink logo accent jaisa image me ha
        letterSpacing: '1px',
        marginBottom: '45px',
        textTransform: 'uppercase'
      }}>
        NOVA
      </div>

      {/* Menu Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '12px 16px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'background-color 0.2s'
            }}
            // Hover effect vanilla inline me handle karne ke liye class lagayi ja sakti ha, ya direct simple transitions
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
