const CreatePlanBanner = () => {
  // TODO: The current text width won't match the 445px width,
  // for some reason the text size is different with figma files
  // hence it will adjusted to 505px to match the wrap at figma files

  return (
    <div className="plan-banner-img h-[324px] md:h-[462px] px-[24px] py-[80px] md:px-[48px] md:py-[140px] lg:px-[80px] rounded-(--radius-12)">
      <div className="flex flex-col gap-[20px] md:gap-[32px] w-[296px] h-[164px] md:w-[505px] md:h-[182px]">
        <h1 className="text-(--neutral-50) text-preset-1-mobile md:text-preset-1 text-(--neutral-50)">
          Create a plan
        </h1>
        <p className="text-preset-6 text-(--neutral-50)">
          Coffee the way you wanted it to be. For coffee delivered tomorrow, or
          next week. For whatever brew method you use. For choice, for
          convenience, for quality.
        </p>
      </div>
    </div>
  );
};

export default CreatePlanBanner;
