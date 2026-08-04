const AboutUs = () => {
  return (
    <div className="about-us-img px-[20px] py-[92px] rounded-(--radius-12) md:px-[48px] md:py-[113px] lg:px-[80px] lg:py-[134px]">
      <div className="max-w-[303px] md:max-w-[445px] flex flex-col gap-[24px]">
        <h1 className="text-preset-2-mobile text-(--neutral-50) text-center md:text-preset-2-tablet md:text-start lg:text-preset-2">
          About us
        </h1>
        <p className="text-preset-6 text-(--neutral-50) text-center md:text-start">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
