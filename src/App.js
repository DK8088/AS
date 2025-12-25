import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Home from './pages/Home';
import Products from './pages/Products.js';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Shipping from './pages/Shipping';
import './assets/css/fontawesome.css';
import './assets/css/font.css';
import './assets/css/style.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/contact-us" element={<Contact />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<Products />} />
					<Route path="/shipping-details" element={<Shipping />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;


