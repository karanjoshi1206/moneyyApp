import React, { useEffect, useState } from "react";
import "./Card.scss";
import { useStateValue } from "../../context/StateProvider";
import Modal from "../Modal/Modal";

const Card = ({ elem, page }) => {
	console.log(page);
	const [{ basket }, dispatch] = useStateValue();
	const [count, setCount] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [currentId, setCurrentId] = useState("");
	useEffect(() => {
		setCount(basket.filter((element) => element.id === elem.id).qty);
	}, [basket]);
	const addToCart = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: elem.id,
				title: elem.title,
				price: elem.price,
				description: elem.description,
				image: elem.image,
				qty: 1,
			},
		});
	};
	const removeFromCart = (id) => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	const increment = (id) => {
		dispatch({
			type: "INCREMENT",
			payload: id,
		});
	};
	const decrement = (id, count) => {
		console.log("cnt==", basket.filter((element) => element.id === id)[0].qty);
		if (basket.filter((element) => element.id === id)[0].qty == 1) {
			dispatch({
				type: "REMOVE_FROM_BASKET",
				id: id,
			});
		}
		dispatch({
			type: "DECREMENT",
			payload: id,
		});
	};
	return (
		<div>
			{showModal && <Modal setShowModal={setShowModal} currentId={currentId} />}

			<div className='card'>
				<div className='card-image'>
					<img src={elem.image} alt='' />
				</div>
				<div className='card-content'>
					<div className='card-title'>
						<h3>{elem.title}</h3>
					</div>
					<div className='card-price'>
						<h3>$ {elem.price}</h3>
					</div>
					<div className='card-description'>
						<p>{elem.description?.slice(0, 80)}</p>
					</div>
				</div>
				<div className='card-button'>
					{basket.some((product) => product.id === elem.id) ? (
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<button onClick={() => increment(elem.id)}>+</button>
							<p style={{ margin: "0 4px" }}>
								{basket.map((element) =>
									element.id === elem.id ? element.qty : ""
								)}
							</p>

							<button onClick={() => decrement(elem.id, count)}>-</button>
						</div>
					) : (
						<button onClick={() => addToCart()}>Add to cart</button>
					)}
					{page == "cart" ? (
						<button onClick={() => removeFromCart(elem.id)}>Remove</button>
					) : elem.review["review"] ? (
						<button
							onClick={() => {
								setCurrentId(elem.id);
								setShowModal(true);
							}}>
							{" "}
							View review
						</button>
					) : (
						<button
							onClick={() => {
								setCurrentId(elem.id);
								setShowModal(true);
							}}>
							{" "}
							Add a review
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
