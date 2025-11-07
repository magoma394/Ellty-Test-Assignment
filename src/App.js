import React from 'react';
import PageSelector from './PageSelector';
import './App.css';

function App() {
  const handlePageSelection = (selection) => {
    console.log('Selected:', selection);
    // selection will be 'all' or an array of selected pages
    alert(`Selected: ${selection === 'all' ? 'All pages' : selection.join(', ')}`);
  };

  return (
    <div className="App">
      <PageSelector onDone={handlePageSelection} />
    </div>
  );
}

export default App;

