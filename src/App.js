import { MainPage } from "./pages/MainPage.jsx";
import { About } from "./pages/About.jsx";
import { Students } from "./pages/Students.jsx";
import { Documents } from "./pages/Documents.jsx";
import { Other } from "./pages/Other.jsx";
import { StudentLife } from "./pages/StudentLife.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <HashRouter>
      <Header />
      <div className="behind"></div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="About" element={<About />} />
          <Route path="Students" element={<Students />} />
          <Route path="StudentLife" element={<StudentLife />} />
          <Route path="Other" element={<Other />} />
          <Route path="Documents" element={<Documents />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
