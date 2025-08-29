import LockInstallationPage from "@/app/components/LockInstalationPage";
import NavButtons from "@/app/components/NavButtons";
import { workType } from "@/utils/workType";
import React from "react";

interface PageProps {
  params: Promise<{ work: string }>;
}

const page = async ({ params }: PageProps) => {
  const { work } = await params;

  const getName = () => {
    const newElem = workType.find((elem) => {
      return elem.type === work;
    });
    return newElem;
  };

  return (
    <div className="container mx-auto w-full pt-45">
      <NavButtons type="support" />
      {/* <ContactForm question="Необходима установка? Пишите" /> */}
      <LockInstallationPage header={getName()} />
    </div>
  );
};

export default page;
