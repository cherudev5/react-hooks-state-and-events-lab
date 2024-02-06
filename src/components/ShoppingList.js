import React from "react";
import Item from "./Item";
import  { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('all'); 


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
