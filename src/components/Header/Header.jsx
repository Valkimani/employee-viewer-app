import React from 'react';
import "../styles/Header.css";


const Header = () => {
    return (
      <header className="header">
        <h1 className="text-center">Employee Directory</h1>
        <p className="text-center">
          Use the search box to narrow your search.
        </p>
      </header>
    );
  };
export default Header;