import Footer from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import PageWrapper from "../../shared/components/PageWrapper";
import Work from "../../shared/components/Work";
import ChooseUs from "./components/ChooseUs";
import Collection from "./components/Collection";
import CreatePlan from "./components/CreatePlan";

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <CreatePlan />
      <Collection />
      <ChooseUs />
      <Work withBtn={true} />
      <Footer />
    </PageWrapper>
  );
};

export default Home;
