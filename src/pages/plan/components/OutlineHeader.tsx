interface IOutlineHeader {
  number: number;
  id: string;
  name: string;
  isSelected: boolean;
  isLast: boolean;
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
}

const OutlineHeader = ({
  number,
  id,
  name,
  isSelected,
  isLast,
  setSelectedContent,
}: IOutlineHeader) => {
  const handleClick = () => {
    const activeElement = document.querySelector(`#${id}`);
    if (!activeElement) return;

    activeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setSelectedContent(id);
  };

  const isCurrentlySelected = !isSelected ? "opacity-[40%]" : "";

  return (
    <div>
      <div className={`flex gap-[24px]`}>
        <p
          className={`text-preset-4 ${isCurrentlySelected} ${isSelected ? "text-(--teal-600)" : "text-(--neutral-500)"}`}
        >
          0{number}
        </p>
        <p
          onClick={() => handleClick()}
          className={`text-preset-4 text-(--neutral-900) ${isCurrentlySelected} hover:opacity-[100%] cursor-pointer`}
        >
          {name}
        </p>
      </div>
      <div
        className={`opacity-[25%] ${!isLast ? "my-[20px] border-b border-(--neutral-500)" : ""}`}
      />
    </div>
  );
};

export default OutlineHeader;
