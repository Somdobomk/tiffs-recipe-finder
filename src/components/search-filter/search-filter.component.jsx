import React from 'react';
import './search-filter.styles.css';

export const SearchFilter = ({ filterLogic }) => (
  <div>
    <ul className="filters">
      <li className="filter" onClick={filterLogic}>
        Keto
      </li>
      <li className="filter" onClick={filterLogic}>
        Paleo
      </li>
      <li className="filter" onClick={filterLogic}>
        Sushi
      </li>
      <li className="filter" onClick={filterLogic}>
        Chicken
      </li>
      <li className="filter" onClick={filterLogic}>
        Meat
      </li>
      <li className="filter" onClick={filterLogic}>
        Pasta
      </li>
      <li className="filter" onClick={filterLogic}>
        Dessert
      </li>
      <li className="filter" onClick={filterLogic}>
        Salad
      </li>
      <li className="filter" onClick={filterLogic}>
        Eggs
      </li>
      <li className="filter" onClick={filterLogic}>
        Pizza
      </li>
      <li className="filter" onClick={filterLogic}>
        Fish
      </li>
      <li className="filter" onClick={filterLogic}>
        Grill
      </li>
    </ul>
  </div>
);
