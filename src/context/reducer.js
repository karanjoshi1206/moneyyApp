import data from "../data";

export const initialState = {
	basket: [],
	productList: data,
};
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.qty * item.price + amount, 0);

function reducer(state, action) {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return { ...state, basket: [...state.basket, action.item] };
		case "REMOVE_FROM_BASKET":
			let newBasket = [...state.basket];
			const index = state.basket.findIndex(
				(basketitem) => basketitem.id === action.id
			);
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn("it is not in basket");
			}
			return { ...state, basket: newBasket };
		case "EMPTY_BASKET":
			return { ...state, basket: [] };
		case "INCREMENT":
			let updatedCart = state.basket.map((item) => {
				if (item.id === action.payload) {
					return { ...item, qty: item.qty + 1 };
				}
				return item;
			});
			// console.log("state==>", updatedCart);
			return { ...state, basket: updatedCart };
		case "DECREMENT":
			let newCart = state.basket.map((item) => {
				if (item.id === action.payload) {
					return { ...item, qty: item.qty - 1 };
				}
				return item;
			});
			return { ...state, basket: newCart };
		case "ADD_REVIEW":
			console.log("runs");
			let newProductList = state.productList.map((item) => {
				if (item.id === action.item.id) {
					return {
						...item,
						review: {
							name: action.item.name,
							review: action.item.review,
						},
					};
				}
				return item;
			});
			console.log("new list is ", newProductList);
			return { ...state, productList: newProductList };

		default:
			return state;
	}
}
export default reducer;
