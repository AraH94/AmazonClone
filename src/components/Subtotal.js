import React from "react";
import CurrencyFormat from "react-currency-format"
import './style/Subtotal.css'
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">

			
			{/* Price */}
			<CurrencyFormat

				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />This order contains a gift
						</small>
					</>
				)}

			decimalScale={2}
			value={getBasketTotal(basket)}
			displayType={"text"}
			thousandSeperator={true}
			prefix={"€"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;

/*
For the subtotal:
insert in the terminal:  npm install react-currency-format --save --legacy-peer-deps
*/