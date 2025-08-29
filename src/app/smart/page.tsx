import Link from "next/link";
import React from "react";
import ToggleArrow from "../components/ToggleArrow";
import NavButtons from "../components/NavButtons";

const page = () => {
  return (
    <div className="container mx-auto w-full pt-45">
      <NavButtons type="smart" />
    </div>
  );
};

export default page;
