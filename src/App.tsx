import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Downloads from "@/pages/Downloads";
import About from "@/pages/About";
import Changelog from "@/pages/Changelog";
import Docs from "@/pages/Docs";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
        <Route path="/changelog" element={<Layout><Changelog /></Layout>} />
        <Route path="/docs" element={<Layout><Docs /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </Router>
  );
}
