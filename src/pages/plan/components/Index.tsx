interface IIndex {
  number: number;
  id: string;
  name: string;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
}

const Index = ({ number, id, name, setSelectedContent }: IIndex) => {
  const handleClick = () => {
    document
      .querySelector(`#${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSelectedContent(id);
  };

  return (
    <div className="flex gap-[32px]">
      <p>{number}</p>
      <p onClick={() => handleClick()} className="w-[128px]">
        {name}
      </p>
    </div>
  );
};

export default Index;
