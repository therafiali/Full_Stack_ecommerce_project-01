export interface NavArrayTypes {
  label: string;
  href: string;
  isDropdown: boolean;
  DropDownData?: Array<NavArrayTypes>;
}

export const navbarArr: NavArrayTypes[] = [
  {
    label: "Female",
    href: "/female/Female",
    isDropdown: true,
    DropDownData: [
      {
        label: "Sweater",
        href: "/female/Sweater",
        isDropdown: false,
      },
      {
        label: "Pants",
        href: "/female/Pants",
        isDropdown: false,
      },
      {
        label: "Dresses",
        href: "/female/Dress",
        isDropdown: false,
      },
      {
        label: "Jackets",
        href: "/female/Jackets",
        isDropdown: false,
      },
      {
        label: "Shirts",
        href: "/female/Shirts",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Male",
    href: "/male/Male",
    isDropdown: true,
    DropDownData: [
      {
        label: "Sweater",
        href: "/male/Sweater",
        isDropdown: false,
      },
      {
        label: "Jackets",
        href: "/male/Jackets",
        isDropdown: false,
      },
      {
        label: "All Male",
        href: "/male/Male",
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
    href: "/products",
    isDropdown: false,
  },
];
