import whiteCup from "../../assets/about/desktop/image-hero-whitecup.jpg";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${whiteCup})`,
      }}
    >
      <div>
        <h1>About us</h1>
        <p>
          Coffeeroasters began it's journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
