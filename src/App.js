import React from 'react';
import './App.css';
import TestImg from './TestImg.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="appname">
          FurnIt 
        </span>
        <span className = "MenuList">
          Items | Catalog
        </span>
        <span className = "Cart">
          <i className='fas fa-shopping-cart'></i> (0) Cart
        </span>
      </header>

      <div className="ItemDisplay">
        <img className="ImgStyle" src={TestImg} alt="TestImg" />
        <span className="ItemName"> Item</span>
        <br />
        <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
        <br />
        Etiam volutpat dolor id maximus rutrum. 
        <br />
        Donec sit amet faucibus augue. </span>
        <br />
        <span className="PriceStyle"> $000.00</span>
      </div>

      <div className="ItemDisplay">
        <img className="ImgStyle" src={TestImg} alt="TestImg" />
        <span className="ItemName"> Item</span>
        <br />
        <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
        <br />
        Etiam volutpat dolor id maximus rutrum. 
        <br />
        Donec sit amet faucibus augue. </span>
        <br />
        <span className="PriceStyle"> $00.00</span>
      </div>

      <div className="ItemDisplay">
        <img className="ImgStyle" src={TestImg} alt="TestImg" />
        <span className="ItemName"> Item</span>
        <br />
        <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
        <br />
        Etiam volutpat dolor id maximus rutrum. 
        <br />
        Donec sit amet faucibus augue. </span>
        <br />
        <span className="PriceStyle"> $00.00</span>
      </div>

    </div>
  );
}


// const header {

// }



export default App;
