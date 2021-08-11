import React from 'react';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="https://github.com/">
        <FaHome size={24} />
      </a>
      <a href="https://github.com/">
        <FaUserAlt size={24} />
      </a>
      <a href="https://github.com/">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
