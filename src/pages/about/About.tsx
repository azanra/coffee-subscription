import PageWrapper from "../../shared/components/PageWrapper";
import AboutUs from "../components/about/AboutUs";
import Commitment from "../components/about/Commitment";
import Headquarter from "../components/about/Headquarter";
import Quality from "../components/about/Quality";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

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
