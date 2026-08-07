import type React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-[16px] py-[24px] md:px-[32px] md:py-[40px] xxl:px-[80px] xxl:py-[40px]">
      {children}
    </div>
  );
};

export default PageWrapper;
