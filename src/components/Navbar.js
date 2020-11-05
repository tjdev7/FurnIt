import React from 'react';
import ReactDOM from 'react-dom';

class extends Navbar component () {
	// render
	return (
		<CatalogMenu/>
		<AppTitle/>
		<Cart/>
	);
}

const CatalogMenu () {
	return (
		<span className = "MenuList">
          Catalog
    </span>	
	);
}

const AppTitle() {
	return (
		<span className="appname">
          FurnIt 
        </span>
	);
}

const Cart {
	return (
		<span className = "Cart">
          <i className='fas fa-shopping-cart'></i> {item amount:0} Cart
        </span>
		
	);
}        

export default Navbar;