import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LOGIN from "./pages/LOGIN";
import LANDINGPAGE from "./pages/LANDINGPAGE";
import LOGIN1 from "./pages/LOGIN1";
import LOGIN2 from "./pages/LOGIN2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-1":
        title = "";
        metaDescription = "";
        break;
      case "/login-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LOGIN />} />
      <Route path="/landing-page" element={<LANDINGPAGE />} />
      <Route path="/login-1" element={<LOGIN1 />} />
      <Route path="/login-2" element={<LOGIN2 />} />
    </Routes>
  );
}
export default App;
