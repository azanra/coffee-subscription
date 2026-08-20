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
      <main className="flex flex-col gap-[80px] xxl:gap-[140px]">
        <CreatePlan />
        <Collection />
        <ChooseUs />
        <Work />
        <Footer />
      </main>
    </PageWrapper>
  );
};

export default Home;
