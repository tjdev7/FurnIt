import React from 'react';
import ReactDOM from 'react-dom';
import TestImg from './img/TestImg.png';
import testimg2 from './img/testimg2.jpg';
import testimg3 from './img/testimg3.jpg';
import testimg4 from './img/testimg4.jpg';
import testimg5 from './img/testimg5.jpg';
import testimg6 from './img/testimg6.jpg';
import testimg8 from './img/testimg8.jpg';
import testimg9 from './img/testimg9.jpg';

const CatalogList({
	test: {name, description, price }
}) => (
		<CatalogDisplay />

		// {name}
		// {description}
		// {price}
	);


var CatalogDisplay = [
	{
		id: 0,
		img: require('/img/img001.jpg')
		name: "Dresser Set",
		description: "",
		price: $000.00,
		likes: 40,
		favorites: 189
	},
	{
		id: 1,
		img: require('/img/img001.jpg'),
		name: "Persian Rug",
		description: "",
		price: $000.00,
	},
	{
		id: 2,
		img: require('/img/img001.jpg'),
		name: "Minimalist lamp",
		description: "",
		price: $000.00,

	},
	{
		id: 3,
		img: require('/img/img001.jpg'),
		name: "Minimalist lamp",
		description: "",
		price: $000.00,
	},
	{
		id: 4,
		img: require('/img/img001.jpg'),
		name: "Outdoor Sofa",
		description: "",
		price: $000.00
	},
	{
		id: 5,
		img: require('/img/img001.jpg'),
		name: "Sofa Chair",
		description: "",
		price: $000.00
	},
	{
		id: 6,
		img: require('/img/img001.jpg'),
		name: "Minimalist Chair",
		description: "",
		price: $000.00
	},
	{
		id: 7,
		img: require('/img/img001.jpg'),
		name: "Plate set",
		description: "",
		price: $000.00
	},
	{
		id: 8,
		img: require('/img/img001.jpg'),
		name: "Dinner Set",
		description: "",
		price: $000.00
	}
];


export default CatalogList;