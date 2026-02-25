import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import TeamPage from "./pages/TeamPage";
import FeaturesPage from "./pages/FeaturesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import NavbarPage from "./pages/NavbarPage";

export default function AppRouter({ setPage }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage setPage={setPage} />} />
        <Route path="/about" element={<AboutPage setPage={setPage} />} />
        <Route path="/solutions" element={<SolutionsPage setPage={setPage} />} />
        <Route path="/team" element={<TeamPage setPage={setPage} />} />
        <Route path="/features" element={<FeaturesPage setPage={setPage} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/navbar-demo" element={<NavbarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
