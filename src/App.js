import "./App.scss";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Product />} />
					<Route path='cart' element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
