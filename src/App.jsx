import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
	return (
		<div className="wrapper grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
			<header className="bg-neutral-900 py-2 text-neutral-50">
				<NavBar />
			</header>
			<main className="max-h-[calc(100vh-98px)] overflow-hidden">
				<Routes>
					<Route path="/holifun" element={<Home />} />
					<Route path="/holifun/destinations" element={<Destinations />} />
					<Route
						path="/holifun/destinations/:id"
						element={<DestinationDetails />}
					/>
					<Route path="/holifun/contact" element={<Contact />} />
					<Route path="/holifun/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
