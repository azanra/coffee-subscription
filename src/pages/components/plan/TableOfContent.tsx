import Content from "./Content";

interface ITableOfContent {
  list: {
    id: string;
    question: string;
    options: ITableOfContentOption[];
  };
  isCapsules: boolean;
}

export interface ITableOfContentOption {
  header: string;
  body: string;
}

const TableOfContent = ({ list, isCapsules }: ITableOfContent) => {
  return (
    <div className="flex gap-[64px] px-8">
      <Content
        id={list.id}
        question={list.question}
        options={list.options}
        isCapsules={isCapsules}
      />
    </div>
  );
};

export default TableOfContent;
