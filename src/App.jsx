import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import ProjectDetail from "./pages/ProjectDetail";

function Placeholder({ title }) {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 pt-40">
      <h1 className="font-display text-7xl">{title}</h1>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
