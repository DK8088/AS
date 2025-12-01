import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Home from './pages/Home';
import Products from './pages/Products.js';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './assets/css/style.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/contact-us" element={<Contact />} />
					<Route path="/Products/" element={<Products />} />
					<Route path="/Products/:id" element={<Products />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;


