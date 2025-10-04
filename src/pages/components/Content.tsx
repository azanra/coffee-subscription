interface Content {
  questionRef: React.RefObject<HTMLDivElement | null>;
  question: string;
  top: number;
}

const Content = ({ questionRef, question, top }: Content) => {
  return (
    <div
      ref={questionRef}
      className={"flex gap-[32px] relative"}
      style={{ top: `${top}px` }}
    >
      <div>
        <h1>{question}</h1>
      </div>
      <div>
        <button>+</button>
      </div>
    </div>
  );
};

export default Content;
