import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VirtualSection from "./pages/VirtualPage";
import VisualizationSection from "./pages/VisualizationPage";
import ArchitectureSection from "./pages/ArchitecturePage";
import InteriorSection from "./pages/InteriorPage";
import Layout from "./components/layout/layout";
import SmoothScrollProvider from "./providers/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <SmoothScrollProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Layout wrap */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route
              path="/services/architecture"
              element={<ArchitectureSection />}
            />
            <Route path="/services/interior" element={<InteriorSection />} />
            <Route
              path="/services/3d-visualization"
              element={<VisualizationSection />}
            />
            <Route
              path="/services/virtual-experience"
              element={<VirtualSection />}
            />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SmoothScrollProvider>
  );
}

export default App;
