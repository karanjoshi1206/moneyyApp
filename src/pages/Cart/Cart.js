import React from "react";
import "./Cart.scss";
import { useStateValue } from "../../context/StateProvider";
import Card from "../../Components/Card/Card";
import { getBasketTotal } from "../../context/reducer";
import { Link } from "react-router-dom";

const Cart = () => {
	const [{ basket }, dispatch] = useStateValue();
	const emptyCart = () => {
		dispatch({
			type: "EMPTY_BASKET",
		});
	};

	return (
		<>
			{basket?.length === 0 ? (
				<div className='empty-cart'>
					<h2>Your Cart is Empty</h2>
					<img src='/assets/empty-cart.gif' />

					<p>
						Add some <Link to={"/"}>products</Link>{" "}
					</p>
				</div>
			) : (
				<>
					<div className='cart'>
						<div className='cart-items'>
							{basket.map((elem) => (
								<Card key={elem.id} elem={elem} page={"cart"} />
							))}
						</div>
						<div className='cart-total'>
							<h2>
								Total:
								<strong> ${getBasketTotal(basket)}</strong>
							</h2>
							<button onClick={() => emptyCart()}>Clear Cart </button>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Cart;
