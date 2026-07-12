import type React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-[16px] py-[24px] md:px-[32px] md:py-[40px] lg:px-[80px] lg:py-[40px]">
      {children}
    </div>
  );
};

export default PageWrapper;
