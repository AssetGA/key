import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto w-full pt-45">
      <ul className="flex flex-row">
        <li className="mx-2">
          <Link href="/">На главную</Link>
        </li>
        {" / "}
        <li className="mx-2">Стиль</li>
      </ul>
      <div className="text-2xl">Данный пункт в разработке</div>
    </div>
  );
};

export default page;
