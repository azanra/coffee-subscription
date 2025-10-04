import ChooseUs from "./components/home/ChooseUs";
import Collection from "./components/home/Collection";
import CreatePlan from "./components/home/CreatePlan";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Work from "./components/shared/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <CreatePlan />
      <Collection />
      <ChooseUs />
      <Work withBtn={true} />
      <Footer />
    </div>
  );
};

export default Home;
