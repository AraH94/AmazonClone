import React from 'react';
import Product from './Product';
import './style/Home.css';

function Home() {
	return (
		<div className="home">
			<img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

			{/* Product id, title, price, rating, image */}
			<div className="home__row">
				<Product
					id="12341"
					title="Sapiens: A Brief History of Humankind"
					price={14.50}
					rating={5}
					image="https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
				/>
				<Product
					id="12342"
					title="The Psychology Book: Big Ideas Simply Explained (DK Big Ideas)
					by DK"
					price={13.89}
					rating={5}
					image="https://m.media-amazon.com/images/P/0756689708.01._SCLZZZZZZZ_SX500_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="12343"
					title="Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Water, Iced Tea or Coffee, Smoothie and More 40oz - New Version"
					price={45.00}
					rating={5}
					image="https://m.media-amazon.com/images/I/51m9GX7ShPL._AC_SL1500_.jpg"
				/>
				<Product
					id="12344"
					title="KitchenAid RRK150IC 5 Qt. Artisan Series - Ice (Renewed)"
					price={329.87}
					rating={5}
					image="https://m.media-amazon.com/images/I/61JmahvVe0L._AC_SX522_.jpg"
				/>
				<Product
					id="12345"
					title="Zulay Powerful Milk Frother Handheld Foam Maker for Lattes - Whisk Drink Mixer for Coffee, Mini Foamer for Cappuccino, Frappe, Matcha, Hot Chocolate by Milk Boss (Black)"
					price={11.99}
					rating={5}
					image="https://m.media-amazon.com/images/I/81BCRFhun6L._AC_SL1500_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="12346"
					title="KOORUI 24 Inch Computer Monitor Full HD 1920 x 1080p VA Display 75Hz 3000:1 Contrast Ratio with HDMI, VGA, Frameless, 75 x 75 mm VESA Mountable, Ergonomic Tilt, Black"
					price={82.30}
					rating={5}
					image="https://m.media-amazon.com/images/I/71TOE0w7DzL._AC_SL1500_.jpg"
				/>
			</div>

			{/* Product */}
		</div>
	);
}

export default Home;