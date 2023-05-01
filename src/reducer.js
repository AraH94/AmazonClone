export const initialState = {
	basket: [
		{
			id: "12341",
			title: "Sapiens: A Brief History of Humankind",
			price: 14.50,
			rating: 4,
			image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
		},
		// {
		// 	id: "12341",
		// 	title: "Sapiens: A Brief History of Humankind",
		// 	price: 14.50,
		// 	rating: 4,
		// 	image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
		// },
	],
	user: null,
};

// It's incrementing all the prices inside the basket, starting from 0, and it returns that number

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
	console.log(action);
	
	// FIREBASE
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			// Logic for removing item from basket...

			// We cloned the basket
			let newBasket = [...state.basket];

			// Go and check all the item basket and check if the id is equivalent the action id
			// We check to see if product exists
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			if (index >= 0) {
				// item exists in basket, remove it...
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id}) as it's not in basket`
				);
			}
			return {
				...state,
				basket: newBasket,
			};
		default:
			return { ...state };
	}
};

export default reducer;