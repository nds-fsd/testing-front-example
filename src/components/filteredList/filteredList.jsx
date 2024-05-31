// src/components/FilteredList.jsx
import React, { useState } from 'react';

const FilteredList = ({ items }) => {
  const [filter, setFilter] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
