import React, { useState } from 'react';
import './PageSelector.css';

const PageSelector = ({ onDone }) => {
  const [selectedPages, setSelectedPages] = useState([]);
  const [allPagesSelected, setAllPagesSelected] = useState(false);

  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

  const handleAllPagesToggle = () => {
    if (allPagesSelected) {
      setSelectedPages([]);
      setAllPagesSelected(false);
    } else {
      setSelectedPages([...pages]);
      setAllPagesSelected(true);
    }
  };
  const handlePageToggle = (page) => {
    if (selectedPages.includes(page)) {
      const newSelection = selectedPages.filter(p => p !== page);
      setSelectedPages(newSelection);
      setAllPagesSelected(false);
    } else {
      const newSelection = [...selectedPages, page];
      setSelectedPages(newSelection);
      // If all individual pages are selected, check "All pages" too
      if (newSelection.length === pages.length) {
        setAllPagesSelected(true);
      }
    }
  };

  const handleDone = () => {
    if (onDone) {
      onDone(allPagesSelected ? 'all' : selectedPages);
    }
  };

  return (
    <div className="page-selector-container">
      <div className="page-selector-card">
        <div className="page-selector-content">
          {/* All pages option */}
          <div className="page-option" onClick={handleAllPagesToggle}>
            <span className="page-option-text">All pages</span>
            <input
              type="checkbox"
              className="page-checkbox"
              checked={allPagesSelected}
              onChange={handleAllPagesToggle}
            />
          </div>

          {/* Separator */}
          <div className="page-separator"></div>

          {/* Individual page options */}
          {pages.map((page) => (
            <div
              key={page}
              className="page-option"
              onClick={() => handlePageToggle(page)}
            >
              <span className="page-option-text">{page}</span>
              <input
                type="checkbox"
                className="page-checkbox"
                checked={selectedPages.includes(page)}
                onChange={() => handlePageToggle(page)}
              />
            </div>
          ))}
        </div>

        {/* Done button */}
        <button className="done-button" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default PageSelector;

