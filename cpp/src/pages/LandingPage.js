import FrameComponent from "../components/FrameComponent";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage8}>
      <FrameComponent />
      <Section2 />
      <Section1 />
      <Section />
      <Footer />
    </div>
  );
};

export default LandingPage;
