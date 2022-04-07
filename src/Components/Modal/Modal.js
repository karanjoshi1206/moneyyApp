import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import "./Modal.scss";
const Modal = ({ setShowModal, currentId }) => {
	const [{ basket, productList }, dispatch] = useStateValue();
	const [name, setName] = useState("");
	const [review, setReview] = useState("");
	const addReview = () => {
		console.log("hello", productList);
		dispatch({
			type: "ADD_REVIEW",
			item: {
				id: currentId,
				name: name,
				review: review,
			},
		});
		setShowModal(false);
	};

	useEffect(() => {
		let elem = productList.filter((elem) => elem.id === currentId);
		console.log("name is ", elem);
		setName(elem[0].review.name);
		setReview(elem[0].review.review);
	}, []);

	return (
		<div className='modal'>
			{/* create a modal component */}
			<div className='modal-content'>
				<div className='modal-header'>
					<span onClick={() => setShowModal(false)} className='close'>
						&times;
					</span>
					<h2 className='modal-title'> Add a review</h2>
				</div>

				<div className='modal-body'>
					<form className='form-group'>
						<label htmlFor='name'>Name</label>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
						/>

						<label htmlFor='name'>Review</label>
						<textarea
							value={review}
							onChange={(e) => setReview(e.target.value)}
						/>
					</form>
					<div className='form-group-button'>
						<button onClick={() => addReview()}>Submit</button>
						<button onClick={() => setShowModal(false)}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
