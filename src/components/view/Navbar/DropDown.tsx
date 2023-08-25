import { NavArrayTypes } from "@/components/utils/navbar-array";
import Link from "next/link";
import { FC } from "react";

const DropDown: FC<{ item: NavArrayTypes }> = ({ item }) => {
  return (
    <ul>
      {item.DropDownData?.map((item: NavArrayTypes, i: number) => (
        <li className="border-b-2  border-black mt-2 hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0" key={i} >
          <Link className='' href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;


