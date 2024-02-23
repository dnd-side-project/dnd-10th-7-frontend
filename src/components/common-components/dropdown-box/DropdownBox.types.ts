import { Dispatch, SetStateAction } from "react";

export type DropdownBoxProps = {
  items: string[];
  place: DropdownBoxPlace;
  className?: string;
  projectId?: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const dropdownBoxPlaces = {
  left: "left",
  center: "center",
  right: "right",
} as const;
export type DropdownBoxPlace =
  (typeof dropdownBoxPlaces)[keyof typeof dropdownBoxPlaces];
