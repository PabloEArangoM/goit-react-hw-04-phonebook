import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search contacts..."
    />
  );
};

export default Filter;
