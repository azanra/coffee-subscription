import ChooseUs from "./components/ChooseUs";
import Collection from "./components/Collection";
import CreatePlan from "./components/CreatePlan";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./components/Work";

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
