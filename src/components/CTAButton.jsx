import React from 'react';

const CTAButton = ({ href, children }) => {
  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#4A6FA5',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '18px',
    textDecoration: 'none',
    border: 'none',
    boxShadow: '0 10px 25px rgba(74, 111, 165, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    minWidth: '200px',
    lineHeight: '1.2'
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#3A5F95';
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 15px 35px rgba(74, 111, 165, 0.4)';
    e.target.style.color = '#FFFFFF';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#4A6FA5';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 10px 25px rgba(74, 111, 165, 0.3)';
    e.target.style.color = '#FFFFFF';
  };

  return (
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    </div>
  );
};

export default CTAButton;
