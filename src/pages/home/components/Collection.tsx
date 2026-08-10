import Gran from "../../../assets/home/desktop/image-gran-espresso.png";
import Planalto from "../../../assets/home/desktop/image-planalto.png";
import Piccolo from "../../../assets/home/desktop/image-piccollo.png";
import Danche from "../../../assets/home/desktop/image-danche.png";

const Collection = () => {
  const collectionList = [
    {
      img: Gran,
      header: "Gran Espresso",
      body: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
      img: Planalto,
      header: "Planalto",
      body: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    },
    {
      img: Piccolo,
      header: "Piccolo",
      body: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    },
    {
      img: Danche,
      header: "Danche",
      body: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="z-1 md:relative top-[60px] text-preset-1-mobile md:text-collection-tablet xxl:text-collection collection-gradient text-center">
        our collection
      </h1>

      <div className="z-2 flex flex-col gap-[32px] md:gap-[24px] xxl:flex-row xxl:gap-[32px] xxl:max-w-[1110px] items-center justify-center">
        {collectionList.map((list) => {
          return (
            <div
              key={list.header}
              className="flex-[1_1_0px] flex flex-col gap-[24px] md:flex-row md:gap-[32px] xxl:flex-col xxl:gap-[48px] items-center"
            >
              <div className="flex items-center justify-center">
                <img
                  src={list.img}
                  alt={list.header}
                  className="w-[253px] h-[193px]"
                />
              </div>
              <div className="flex flex-col gap-[16px] md:gap-[24px] text-center md:text-start xxl:text-center md:max-w-[300px] xxl:max-w-[253px]">
                <h2 className="text-preset-4 text-(--neutral-900)">
                  {list.header}
                </h2>
                <p className="text-preset-6 text-(--neutral-900)">
                  {list.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
