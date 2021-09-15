import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>INICIO</a>
        </Link>
        <Link href="/test"> 
        <a>TEST</a>
        </Link>
      </nav>
        <section className="textos-header">
          <h1>TEST VOCACIONAL UNT</h1>
          <h2>¿Aún no sabes qué carrera universitaria elegir?</h2>
        </section>
    </header>
  );
};

export default header;
