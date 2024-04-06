import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDINGPAGE from "./pages/LANDINGPAGE";
import LOGIN from "./pages/LOGIN";
import LOGIN1 from "./pages/LOGIN1";
import LOGIN2 from "./pages/LOGIN2";
import REGISTER from "./pages/REGISTER";
import REGISTER1 from "./pages/REGISTER1";
import REGISTERPASS from "./pages/REGISTERPASS";
import EMPLOYEEDASHBOARD from "./pages/EMPLOYEEDASHBOARD";
import REGISTERPASS1 from "./pages/REGISTERPASS1";
import REGISTERPASS2 from "./pages/REGISTERPASS2";
import REGISTERPASS3 from "./pages/REGISTERPASS3";
import DRAFTS from "./pages/DRAFTS";
import NOTIFICATION1 from "./pages/NOTIFICATION1";
import ADDSKILL from "./pages/ADDSKILL";
import SUBMISSIONS from "./pages/SUBMISSIONS";
import REGISTER2 from "./pages/REGISTER2";

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
      case "/login-3":
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
      case "/register-1":
        title = "";
        metaDescription = "";
        break;
      case "/register-2":
        title = "";
        metaDescription = "";
        break;
      case "/register-pass-4":
        title = "";
        metaDescription = "";
        break;
      case "/employee-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/register-pass-1":
        title = "";
        metaDescription = "";
        break;
      case "/register-pass-2":
        title = "";
        metaDescription = "";
        break;
      case "/register-pass-3":
        title = "";
        metaDescription = "";
        break;
      case "/drafts":
        title = "";
        metaDescription = "";
        break;
      case "/notification-1":
        title = "";
        metaDescription = "";
        break;
      case "/add-skill":
        title = "";
        metaDescription = "";
        break;
      case "/submissions":
        title = "";
        metaDescription = "";
        break;
      case "/register-3":
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
      <Route path="/" element={<LANDINGPAGE />} />
      <Route path="/login-3" element={<LOGIN />} />
      <Route path="/login-1" element={<LOGIN1 />} />
      <Route path="/login-2" element={<LOGIN2 />} />
      <Route path="/register-1" element={<REGISTER />} />
      <Route path="/register-2" element={<REGISTER1 />} />
      <Route path="/register-pass-4" element={<REGISTERPASS />} />
      <Route path="/employee-dashboard" element={<EMPLOYEEDASHBOARD />} />
      <Route path="/register-pass-1" element={<REGISTERPASS1 />} />
      <Route path="/register-pass-2" element={<REGISTERPASS2 />} />
      <Route path="/register-pass-3" element={<REGISTERPASS3 />} />
      <Route path="/drafts" element={<DRAFTS />} />
      <Route path="/notification-1" element={<NOTIFICATION1 />} />
      <Route path="/add-skill" element={<ADDSKILL />} />
      <Route path="/submissions" element={<SUBMISSIONS />} />
      <Route path="/register-3" element={<REGISTER2 />} />
    </Routes>
  );
}
export default App;

