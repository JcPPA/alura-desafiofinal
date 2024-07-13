import React from 'react';
import './MenuSearch.css';

const MenuSearch = ({ placeholder }) => {
  const handleSearch = () => {
    alert('Pesquisar por: ' + placeholder);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
      />
      <button className="search-button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default MenuSearch;
