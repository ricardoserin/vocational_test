import React from 'react';
import Header from './common/Header';

const Layout = ({ children }) => {
  return(
    <main className="app">
        <Header />
        {children}
    </main>
  );
};

export default Layout;