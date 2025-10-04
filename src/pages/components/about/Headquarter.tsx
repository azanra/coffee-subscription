import uk from "../../../assets/about/desktop/illustration-uk.svg";
import canada from "../../../assets/about/desktop/illustration-canada.svg";
import australia from "../../../assets/about/desktop/illustration-australia.svg";

const Headquarter = () => {
  const headquarterList = [
    {
      img: uk,
      country: "United Kingdom",
      street: "68 Asfordby Rd",
      city: "Alcaston",
      postalCode: "SY6 1YA",
      phoneNumber: "+44 1241 918425",
    },
    {
      img: canada,
      country: "Canada",
      street: "1528 Eglinton Avenue",
      city: "Toronto",
      postalCode: "Ontario M4P 1A6",
      phoneNumber: "+1 416 485 2997",
    },
    {
      img: australia,
      country: "Australia",
      street: "36 Swanston Street",
      city: "Kewell",
      postalCode: "Victoria",
      phoneNumber: "+61 9928 3629",
    },
  ];
  return (
    <div>
      <div>
        <h1>Our headquarters</h1>
      </div>
      <div>
        {headquarterList.map((item) => {
          return (
            <div key={item.country}>
              <img src={item.img} alt={item.country} />
              <p>{item.street}</p>
              <p>{item.city}</p>
              <p>{item.postalCode}</p>
              <p>{item.phoneNumber}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Headquarter;
