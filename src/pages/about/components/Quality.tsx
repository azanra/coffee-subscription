const Quality = () => {
  return (
    <div className="quality-bg-img mt-[80px] md:mt-[224px] xxl:mt-[90px] px-[20px] pb-[40px] pt-[112px] rounded-(--radius-12) md:px-[82px] md:pb-[64px] md:pt-[140px] xxl:flex xxl:flex-row xxl:flex-row-reverse xxl:px-[80px] xxl:py-[112px] xxl:gap-[120px] xxl:items-center">
      <div className="flex items-center justify-center relative xxl:h-[210px]">
        <div className="absolute xxl:relative top-[-190px] md:top-[-350px] xxl:top-[-60px] quality-img w-[280px] h-[156px] md:w-[573px] md:h-[300px] xxl:w-[445px] xxl:h-[474px] rounded-(--radius-12)" />
      </div>
      <div className="flex flex-col gap-[32px] md:gap-[20px] xxl:gap-[32px]">
        <h1 className="text-preset-2-tablet text-(--neutral-50) xxl:text-preset-2 text-center xxl:text-start">
          Uncompromising quality
        </h1>
        <p className="text-preset-6 text-(--neutral-50) text-center xxl:text-start">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable
        </p>
      </div>
    </div>
  );
};

export default Quality;
