import ChooseUs from "./components/ChooseUs";
import Collection from "./components/Collection";
import CreatePlan from "./components/CreatePlan";
import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <CreatePlan />
      <Collection />
      <ChooseUs />
    </div>
  );
};

export default Home;
