import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
        return (
                <Router>
                        <div className="btw">
                                <Navbar />

                                <main className="container">
                                        <Routes>
                                                <Route path="/" element={<Home />} />
                                                <Route path="/about" element={<About />} />
                                                <Route path="/not-found" element={<NotFound />} /> 
                                                <Route path="/*" element={<NotFound />} />
                                        </Routes>
                                </main>
                                <Footer />
                        </div>
                </Router>
        )
}
