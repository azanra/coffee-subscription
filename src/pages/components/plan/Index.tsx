interface IIndex {
  number: number;
  id: string;
  questionRef: React.RefObject<HTMLDivElement | null>;
}

const Index = ({ number, id, questionRef }: IIndex) => {
  return (
    <div className="flex gap-[32px]">
      <p>{number}</p>
      <p
        onClick={() => {
          questionRef.current && questionRef.current.scrollIntoView();
        }}
        className="w-[128px]"
      >
        {id}
      </p>
    </div>
  );
};

export default Index;
