import { NavArrayTypes } from "@/components/utils/navbar-array";
import Link from "next/link";
import { it } from "node:test";
import { FC } from "react";

const DropDown: FC<{ item: NavArrayTypes }> = ({ item }) => {
  return (
    <div>
      {item.DropDownData?.map((item: NavArrayTypes, i: number) => (
        <li className="border-b-2 border-black mt-2" key={i}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </div>
  );
};

export default DropDown;
