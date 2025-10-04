import AboutUs from "./about/AboutUs";
import Commitment from "./about/Commitment";
import Headquarter from "./about/Headquarter";
import Quality from "./about/Quality";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

const About = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Commitment />
      <Quality />
      <Headquarter />
      <Footer />
    </div>
  );
};

export default About;
