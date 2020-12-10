import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import testimg2 from './img/testimg2.jpg';
import testimg3 from './img/testimg3.jpg';
import testimg4 from './img/testimg4.jpg';
import testimg5 from './img/testimg5.jpg';
import testimg6 from './img/testimg6.jpg';
import testimg7 from './img/testimg7.jpg';
import testimg8 from './img/testimg8.jpg';
import testimg9 from './img/testimg9.jpg';
import testimg10 from './img/testimg10.jpg';
import './bootstrap.css';

function CatalogDisplay() {
  return (
    <div className="App">
      <header className="App-header">
        <span className = "MenuList">
           Catalog
        </span>
        <span className="appname">
          FurnIt 
        </span>
        <span className = "Cart">
            <i className='fas fa-shopping-cart'></i> (0) Cart
        </span>
      </header>
      <main className="bannerdefault"></main>
      <span className="container">
      <div className="row">
        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg2} alt="TestImg" />
          <br />
          <span className="ItemName"> Dresser Set</span>
          <br />
          <span className="DescStyle">  100% Hauge Wood Dresser. 3 panels   </span>
          <br />
          <span className="PriceStyle"> $199.99</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg3} alt="TestImg" />
          <br />
          <span className="ItemName"> Persian Rug</span>
          <br />
          <span className="DescStyle">  Made with traditional Persian weaving. Imported. 100% organic cloth</span>
          <br />
          <span className="PriceStyle"> $695.95</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg4} alt="TestImg" />
          <br />
          <span className="ItemName"> Minimalist lamp</span>
          <br />
          <span className="DescStyle">  Carbon based material. </span>
          <br />
          <span className="PriceStyle"> $39.49</span>
          <button className="CartAdd"> Add to cart</button>
          
        </div>
        </div>
        </span>

        <span className="container">
      <div className="row">
        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg5} alt="TestImg" />
          <br />
          <span className="ItemName"> Outdoor sofa</span>
          <br />
          <span className="DescStyle"> Weather proof to most elements </span>
          <br />
          <span className="PriceStyle"> $249.99</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg6} alt="TestImg" />
          <br />
          <span className="ItemName">Sofa Chair</span>
          <br />
          <span className="DescStyle">  Uses new cotton polyester design for maximum comfortableness </span>
          <br />
          <span className="PriceStyle"> $149.99</span>
          <button className="CartAdd"> Add to cart</button>

        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg7} alt="TestImg" />
          <br />
          <span className="ItemName"> Minimalist Chair</span>
          <br />
          <span className="DescStyle">  Comes in sets of 4, 5, 8, 10 or 15 </span>
          <br />
          <span className="PriceStyle"> $59.99</span>
          <button className="CartAdd"> Add to cart</button>
        </div>
        </div>
        </span>

        <span className="container">
      <div className="row">
        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg8} alt="TestImg" />
          <br />
          <span className="ItemName"> Sofa</span>
          <br />
          <span className="DescStyle">  Made with 100% cotton </span>
          <br />
          <span className="PriceStyle"> $599.99</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg9} alt="TestImg" />
          <br />
          <span className="ItemName"> Plate set</span>
          <br />
          <span className="DescStyle">  Greek design patterns. Volcanic cermamic </span>
          <br />
          <span className="PriceStyle"> $19.99</span>
          <button className="CartAdd"> Add to cart</button>

        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg10} alt="TestImg" />
          <br />
          <span className="ItemName"> Dinner Set</span>
          <br />
          <span className="DescStyle">A dinner set consisting of a solid maple wood chair and 4 colored, minimalist chairs. Comes in  black, yellow, silver, pseudo Wood, and pink</span>
          <br />
          <span className="PriceStyle"> $499.99</span>
          <button className="CartAdd"> Add to cart</button>
        </div>
        </div>
        </span>
    </div>
  );
}

// const ShoppingApp {

//   const AddItem {

//   }

//   const removeItem {

//   }

// }

ReactDOM.render(
  <React.StrictMode>
    <CatalogDisplay />
  </React.StrictMode>,
  document.getElementById('root')
);

