"use client";

import { abouts } from "@/utils/abouts";
import { menuItems } from "@/utils/menu";
import { workType } from "@/utils/workType";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

type Props = {
  type: string;
};

const NavButtons = ({ type }: Props) => {
  const params = useParams();
  const pathname = usePathname();
  const { name, id, work } = params;

  const findByType = abouts.find((elem) => elem.type === name);
  const findByMenu = menuItems.find((elem) => elem.type === type);

  const getWorkName = () => {
    const newElem = workType.find((elem) => elem.type === work);
    return newElem?.name;
  };

  return (
    <ul className="flex flex-wrap items-center text-sm sm:text-base">
      <li className="mx-1 sm:mx-2">
        <Link
          href="/"
          className={`hover:underline ${
            pathname === "/" ? "font-bold text-blue-700" : ""
          }`}
        >
          На главную
        </Link>
      </li>
      <span className="hidden sm:inline"> / </span>

      <li className="mx-1 sm:mx-2">
        <Link
          href={`/${type}`}
          className={`hover:underline ${
            pathname === `/${type}` ? "font-bold text-blue-700" : ""
          }`}
        >
          {findByMenu?.label}
        </Link>
      </li>
      {name && (
        <>
          <span className="hidden sm:inline"> / </span>
          <li className="mx-1 sm:mx-2">
            <Link
              href={`/${type}/${name}`}
              className={`hover:underline ${
                pathname === `/${type}/${name}` ? "font-bold text-blue-700" : ""
              }`}
            >
              {findByType?.name}
            </Link>
          </li>
        </>
      )}
      {id && (
        <>
          <span className="hidden sm:inline"> / </span>
          <li className="mx-1 sm:mx-2">
            <Link
              href={`/${type}/${name}/${id}`}
              className={`hover:underline ${
                pathname === `/${type}/${name}/${id}`
                  ? "font-bold text-blue-700"
                  : ""
              }`}
            >
              {id}
            </Link>
          </li>
        </>
      )}
      {work && (
        <>
          <span className="hidden sm:inline"> / </span>
          <li className="mx-1 sm:mx-2 text-blue-700 font-bold">
            {getWorkName()}
          </li>
        </>
      )}
    </ul>
  );
};

export default NavButtons;
