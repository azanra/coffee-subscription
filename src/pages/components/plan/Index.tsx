interface IIndex {
  number: number;
  id: string;
  name: string;
}

const Index = ({ number, id, name }: IIndex) => {
  return (
    <div className="flex gap-[32px]">
      <p>{number}</p>
      <p
        onClick={() => {
          document
            .querySelector(`#${id}`)
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="w-[128px]"
      >
        {name}
      </p>
    </div>
  );
};

export default Index;
