import "./css/App.css";
import MovieCard from "./components/MoviesCard";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />

          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
