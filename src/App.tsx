import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";

/* ------------------------------------------------------------
   Route table.
   The Layout component renders the header and footer and
   provides the <Outlet /> that every page below plugs into.
   ------------------------------------------------------------ */

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="story" element={<Story />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}