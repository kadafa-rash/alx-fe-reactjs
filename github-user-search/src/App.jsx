import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="bg-red" style={{ padding: '2rem' }}>
      <h1 className="font-bold underline">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
