const Commitment = () => {
  return (
    <section className="flex flex-col gap-[48px] xxl:gap-[125px] md:flex-row items-center justify-center">
      <div className="commitment-img w-[343px] h-[400px] md:w-[280px] md:h-[520px] xxl:w-[445px] xxl:h-[520px] rounded-(--radius-12)" />
      <div className="flex flex-col gap-[20px] md:gap-[32px] w-[343px] h-[444px] md:w-[376px] xxl:w-[540px] xxl:h-[340px] md:my-[38px] xxl:my-[90px]">
        <h2 className="text-preset-2-mobile text-(--neutral-900) md:text-preset-2 text-center md:text-start">
          Our commitment
        </h2>
        <p className="text-preset-6 text-(--neutral-900) text-center md:text-start">
          We're built on simple mission and a commitment to doing good along the
          way. We want to make it easy for you to discover and brew the world's
          best coffee at home. It all starts at the source. To locate the
          specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
