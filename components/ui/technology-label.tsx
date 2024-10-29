import React from "react";

const TechnologyLabel = ({ name }: { name: string }) => {
  return (
    <>
      <span className="inline-block px-2 py-2 text-sky-300 text-lg bg-emerald-600 rounded-full text-center">
        {name}
      </span>
    </>
  );
};

export default TechnologyLabel;
