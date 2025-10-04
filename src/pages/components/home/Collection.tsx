import gran from "../../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../../assets/home/desktop/image-planalto.png";
import piccolo from "../../../assets/home/desktop/image-piccollo.png";
import danche from "../../../assets/home/desktop/image-danche.png";

const Collection = () => {
  const collectionList = [
    {
      img: gran,
      header: "Gran Espresso",
      body: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
      img: planalto,
      header: "Planalto",
      body: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    },
    {
      img: piccolo,
      header: "Piccolo",
      body: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    },
    {
      img: danche,
      header: "Danche",
      body: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
  ];
  return (
    <div>
      <div>
        <h1>our collection</h1>
      </div>
      <div>
        {collectionList.map((list) => {
          return (
            <div key={list.header}>
              <img src={list.img} alt={list.header} />
              <h2>{list.header}</h2>
              <p>{list.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
