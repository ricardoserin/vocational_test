import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <header className="header">
      <h1>Test Vocacional - UNT</h1>
      <nav class="nav-bar">
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <a>Test</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
