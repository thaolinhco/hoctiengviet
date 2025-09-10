import React from "react";

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '50px',
  background: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  borderBottom: '1px solid #ddd',
};

const Header: React.FC = () => (
  <header style={headerStyle}>
    <h2 style={{ margin: 0 }}>Header</h2>
  </header>
);

export default Header;
