import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Rules from "./pages/Rules.jsx";
import Services from "./pages/Services.jsx";
import Equipment from "./pages/Equipment.jsx";
import Partnership from "./pages/Partnership.jsx";
import CoachesReferees from "./pages/CoachesReferees.jsx";
import Contact from "./pages/Contact.jsx";
import Game from "./pages/Game.jsx";
import KnowledgeArticle from "./pages/KnowledgeArticle.jsx";
import NotFound from "./pages/NotFound.jsx";
import SEO from "./components/SEO.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <SEO />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/coaches-referees" element={<CoachesReferees />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game />} />
          <Route path="/rules/what-is-boccia" element={<KnowledgeArticle />} />
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/rules" element={<Rules />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/equipment" element={<Equipment />} />
          <Route path="/en/partnership" element={<Partnership />} />
          <Route path="/en/coaches-referees" element={<CoachesReferees />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/game" element={<Game />} />
          <Route path="/en/rules/what-is-boccia" element={<KnowledgeArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
