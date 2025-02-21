import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div className="relative w-full h-full">
      {/* Fixed Background with Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary opacity-60"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col h-full items-center overflow-y-auto scrollbar-thin p-6">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
