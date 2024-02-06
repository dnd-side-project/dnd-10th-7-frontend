export type DropdwonProps = {
    items: string[];
    selectedItem: string;
    setSelectedItem: (value: string) => void;
    size: DropdownSize;
    textSize: DropdownSize;
    place: DropdownPlace;
    padding: DropdownSize;
};

export const dropdownSizes = {
    xs: 'xs',
    md: 'md',
    lg: 'lg',
} as const;
export type DropdownSize = (typeof dropdownSizes)[keyof typeof dropdownSizes];

export const dropdownPlaces = {
    left: 'left',
    center: 'center'
} as const;
export type DropdownPlace = (typeof dropdownPlaces)[keyof typeof dropdownPlaces];
