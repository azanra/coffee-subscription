const Work = ({
  withBtn,
  customClass,
}: {
  withBtn: boolean;
  customClass?: string;
}) => {
  const workList = [
    {
      header: "Pick your coffee",
      body: "Select from out evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffee in all profiles every month for your to try out.",
    },
    {
      header: "Choose the frequency",
      body: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      header: "Receive and enjoy!",
      body: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];
  return (
    <div className={`${customClass}`}>
      <div>
        <h1>How it works</h1>
      </div>
      <div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
      </div>
      <div>
        {workList.map((list, index) => {
          return (
            <div key={list.header}>
              <h1>{index + 1}</h1>
              <h2>{list.header}</h2>
              <p>{list.body}</p>
            </div>
          );
        })}
      </div>
      {withBtn && (
        <div>
          <button>Create your plan</button>
        </div>
      )}
    </div>
  );
};

export default Work;
