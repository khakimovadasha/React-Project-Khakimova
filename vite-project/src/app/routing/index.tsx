import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Catalog from "../../pages/catalog";
import Reviews from "../../pages/reviews";
import Contacts from "../../pages/contacts";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="HOME" element={<Home />} />
      <Route path="ABOUT" element={<About />} />
      <Route path="CATALOG" element={<Catalog />} />
      <Route path="REVIEWS" element={<Reviews />} />
      <Route path="CONTACTS" element={<Contacts />} />
    </Routes>
  );
};

export default MainRouter;
