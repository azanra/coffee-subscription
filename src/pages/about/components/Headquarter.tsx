import Uk from "../../../assets/about/desktop/illustration-uk.svg?react";
import Canada from "../../../assets/about/desktop/illustration-canada.svg?react";
import Australia from "../../../assets/about/desktop/illustration-australia.svg?react";

const Headquarter = () => {
  const headquarterList = [
    {
      svg: <Uk />,
      country: "United Kingdom",
      street: "68 Asfordby Rd",
      city: "Alcaston",
      postalCode: "SY6 1YA",
      phoneNumber: "+44 1241 918425",
    },
    {
      svg: <Canada />,
      country: "Canada",
      street: "1528 Eglinton Avenue",
      city: "Toronto",
      postalCode: "Ontario M4P 1A6",
      phoneNumber: "+1 416 485 2997",
    },
    {
      svg: <Australia />,
      country: "Australia",
      street: "36 Swanston Street",
      city: "Kewell",
      postalCode: "Victoria",
      phoneNumber: "+61 9928 3629",
    },
  ];
  return (
    <section className="flex flex-col gap-[64px] xxl:px-[117.5px]">
      <h2 className="text-preset-4 text-(--neutral-500) text-center md:text-start">
        Our headquarters
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-[24px]">
        {headquarterList.map((item) => {
          return (
            <div
              key={item.country}
              className="flex flex-col gap-[32px] md:gap-[40px] xxl:flex-[1_1_0]"
            >
              <div className="flex items-center justify-center">{item.svg}</div>
              <div className="text-center flex flex-col gap-[24px]">
                <h3 className="text-preset-3 text-(--neutral-900)">
                  {item.country}
                </h3>
                <div className="text-preset-6 text-(--neutral-900)">
                  <p>{item.street}</p>
                  <p>{item.city}</p>
                  <p>{item.postalCode}</p>
                  <p>{item.phoneNumber}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Headquarter;
