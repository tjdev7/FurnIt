import React from 'react';
import './App.css';
import TestImg from './TestImg.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          FurnIt 
        </span>
        <span className = "MenuList">
          Items | Catalog
        </span>
        <span className = "Cart">
          <i class='fas fa-shopping-cart'></i> (0) Cart
        </span>
      </header>

      <div className="ItemDisplay">
        <img className="ImgStyle" src={TestImg} alt="TestImg" />
        <span className="ItemName"> Item</span>
        <br/>
        <span className="DescStyle">Desc |</span>
        <span className="PriceStyle"> $Price</span>
      </div>

      <div className="ItemDisplay">
        <img className="ImgStyle" src={TestImg} alt="TestImg" />
        <span className="ItemName"> Item</span>
        <br/>
        <span className="DescStyle">Desc |</span>
        <span className="PriceStyle"> $Price</span>
      </div>

      <div className="ItemDisplay">
        <img className="ImgStyle" src={TestImg} alt="TestImg" />
        <span className="ItemName"> Item</span>
        <br/>
        <span className="DescStyle">Desc |</span>
        <span className="PriceStyle"> $Price</span>
      </div>

    </div>
  );
}


// const header {

// }



export default App;
