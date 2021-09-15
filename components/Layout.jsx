import React from 'react';
import Header from './common/Header';

const Layout = ({ children }) => {
  return(
    <div className="app">
        <Header />
        <>
          {children}
        </>
    </div>
  );
};

export default Layout;