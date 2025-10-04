import coffee from "../../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../../assets/home/desktop/icon-gift.svg";
import truck from "../../../assets/home/desktop/icon-truck.svg";

const ChooseUs = () => {
  const chooseUsList = [
    {
      img: coffee,
      header: "Best quality",
      body: "Discover an endless variety of the world's best artisan coffee from each of our roasters.",
    },
    {
      img: gift,
      header: "Exclusive benefits",
      body: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      img: truck,
      header: "Free shipping",
      body: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed",
    },
  ];
  return (
    <div>
      <div>
        <h1>Why choose us?</h1>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level
        </p>
      </div>
      <div>
        {chooseUsList.map((list) => {
          return (
            <div key={list.header}>
              <img src={list.img} alt={list.header} />
              <h1>{list.header}</h1>
              <p>{list.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
