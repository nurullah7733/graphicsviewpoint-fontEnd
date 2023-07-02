import Link from "next/link";
import React from "react";

const SectionDivider = ({ text, href = "#" }) => {
  return (
    <div className="flex items-center justify-center w-full font-semibold text-white h-14 bg-primary dark:bg-gray-800">
      <h1>
        <Link href={`/${href}`}>{text}</Link>
      </h1>
    </div>
  );
};

export default SectionDivider;
