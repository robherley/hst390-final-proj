import React from 'react';
import './styles.scss';

const scrollToRef = ref => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
};

const Nav = ({ links, currentPage }) => (
  <nav className="nav">
    {Object.entries(links).map(([name, ref], i) => (
      /* eslint-disable */
      <a
        onClick={() => scrollToRef(ref)}
        key={name}
        className={currentPage === name ? `active-${i + 1}` : 'inactive'}
      >
        {name}
      </a>
    ))}
  </nav>
);

export default Nav;
