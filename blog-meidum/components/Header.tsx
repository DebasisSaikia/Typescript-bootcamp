import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <Link href={'/'}>Hello</Link>
      </div>
    </header>
  );
};

export default Header;
