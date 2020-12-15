import React from 'react';
import Counter from './components/Counter';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <div className="App">
      <main>
        <Counter />
        <ThemeToggler />
      </main>
    </div>
  );
}

export default App;
