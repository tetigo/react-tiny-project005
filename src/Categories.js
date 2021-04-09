import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((cada, idx) => (
        <button
          key={idx}
          className="filter-btn"
          onClick={() => filterItems(cada)}
        >
          {cada}
        </button>
      ))}
    </div>
  )
}

export default Categories
