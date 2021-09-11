import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <header className="header">
      <h1>Test Vocacional - UNT</h1>
      <nav className="nav-bar">
        <ul className="nav-bar__ul">
          <li className="nav-bar__li">
            <Link href="/">
              <a className="nav-bar__link">Inicio</a>
            </Link>
          </li>
          <li className="nav-bar__li">
            <Link href="/test">
              <a className="nav-bar__link">Test</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
