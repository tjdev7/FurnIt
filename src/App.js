import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          FurnIt- Furniture Catalog app 
        </span>

        <span className = "MenuList">
          Items | Catalog
        </span>
       
        <span className = "Cart">
          <i class='fas fa-shopping-cart'></i> (0) Cart
        </span>
        
      </header>
    </div>
  );
}

export default App;
