import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className="titulo">Hola mundo</h1>
      <Link href="/test">
        <a>Test</a>
      </Link>
      <a href="/test">Test a</a>
    </div>
  );
};

export default Home;