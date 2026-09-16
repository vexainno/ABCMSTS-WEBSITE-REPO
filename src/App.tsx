import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Students from "@/pages/Students";
import StudentActivity from "@/pages/StudentActivity";
import Admissions from "@/pages/Admissions";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:slug" element={<StudentActivity />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
