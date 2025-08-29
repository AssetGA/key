import React from "react";
import NavButtons from "../components/NavButtons";

const page = () => {
  return (
    <div className="container mx-auto w-full pt-45">
      <NavButtons type="support" />
      {/* <ContactForm question="Необходима установка? Пишите" /> */}
    </div>
  );
};

export default page;
