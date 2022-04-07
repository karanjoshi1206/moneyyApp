import React, { useState } from "react";
import "./Product.scss";
import data from "../../data";
import Card from "../../Components/Card/Card";
import { useStateValue } from "../../context/StateProvider";

const Product = () => {
	const [{ basket, productList }, dispatch] = useStateValue();
	console.log("basket is ", basket);
	return (
		<>
			<div className='product'>
				{productList.map((elem) => (
					<div key={elem.id}>
						<Card elem={elem} page={"product"} />
					</div>
				))}
			</div>
		</>
	);
};

export default Product;
