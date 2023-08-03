export interface NavArrayTypes {
  label: string;
  href: string;
  isDropdown: boolean;
  DropDownData?: Array<NavArrayTypes>;
}

export const navbarArr: NavArrayTypes[] = [
  {
    label: "Female",
    href: "/female",
    isDropdown: true,
    DropDownData: [
      {
        label: "Shirts",
        href: "/female/shirts",
        isDropdown: false,
      },
      {
        label: "Pants",
        href: "/female/pants",
        isDropdown: false,
      },
      {
        label: "Dresses",
        href: "/female/dresses",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Male",
    href: "/male",
    isDropdown: true,
    DropDownData: [
      {
        label: "Shirts",
        href: "/male/shirts",
        isDropdown: false,
      },
      {
        label: "Pants",
        href: "/male/pants",
        isDropdown: false,
      },
      {
        label: "Dresses",
        href: "/male/dresses",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    isDropdown: false,
  },
  {
    label: "All Products",
    href: "/Products",
    isDropdown: false,
  },
];
