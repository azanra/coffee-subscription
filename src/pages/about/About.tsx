import Footer from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import PageWrapper from "../../shared/components/PageWrapper";
import AboutUs from "./components/AboutUs";
import Commitment from "./components/Commitment";
import Headquarter from "./components/Headquarter";
import Quality from "./components/Quality";

const About = () => {
  return (
    <PageWrapper>
      <Header />
      <AboutUs />
      <Commitment />
      <Quality />
      <Headquarter />
      <Footer />
    </PageWrapper>
  );
};

export default About;
