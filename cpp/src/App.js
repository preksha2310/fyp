import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupFinaliseRegistration from "./pages/SignupFinaliseRegistration";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPasswordEmailMessage from "./pages/ResetPasswordEmailMessage";
import ResetPassword from "./pages/ResetPassword";
import UploadingProcess from "./pages/UploadingProcess";
import Error1 from "./pages/Error1";
import FileUploadingProcess from "./pages/FileUploadingProcess";
import Defaulr from "./pages/Defaulr";
import LoadingPage from "./pages/LoadingPage";
import AdminPanel from "./pages/AdminPanel";
import AboutPage from "./pages/AboutPage";

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
      case "/1-login":
        title = "";
        metaDescription = "";
        break;
      case "/2-signup":
        title = "";
        metaDescription = "";
        break;
      case "/23-signup-finalise-registration":
        title = "";
        metaDescription = "";
        break;
      case "/3-forget-password":
        title = "";
        metaDescription = "";
        break;
      case "/4-reset-password-email-message":
        title = "";
        metaDescription = "";
        break;
      case "/5-reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/uploading-process":
        title = "";
        metaDescription = "";
        break;
      case "/error":
        title = "";
        metaDescription = "";
        break;
      case "/file-uploading-process":
        title = "";
        metaDescription = "";
        break;
      case "/defaulr":
        title = "";
        metaDescription = "";
        break;
      case "/loading-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-panel":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/1-login" element={<Login />} />
      <Route path="/2-signup" element={<Signup />} />
      <Route
        path="/23-signup-finalise-registration"
        element={<SignupFinaliseRegistration />}
      />
      <Route path="/3-forget-password" element={<ForgetPassword />} />
      <Route
        path="/4-reset-password-email-message"
        element={<ResetPasswordEmailMessage />}
      />
      <Route path="/5-reset-password" element={<ResetPassword />} />
      <Route path="/uploading-process" element={<UploadingProcess />} />
      <Route path="/error" element={<Error1 />} />
      <Route
        path="/file-uploading-process"
        element={<FileUploadingProcess />}
      />
      <Route path="/defaulr" element={<Defaulr />} />
      <Route path="/loading-page" element={<LoadingPage />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/about-page" element={<AboutPage />} />
    </Routes>
  );
}
export default App;
