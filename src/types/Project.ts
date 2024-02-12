export type InputTitleProps = {
  titleValue: string;
  onTitleChange: any;
  subTitleValue: string;
  onSubTitleChange: any;

  subTitleRef: any;
  subTitleInvalid: boolean;
};

export type InputCheckProps = {
  selectedOption: string;
  handleCheckBoxChange: any;
  selectedProgress: string;
  handleProgressCheckBoxChange: any;
  frontMember: string;
  setFrontMember: any;
  backMember: string;
  setBackMember: any;
  designMember: string;
  setDesignMember: any;
  pmMember: string;
  setPMMember: any;
  submitClicked: boolean;
};

export type TeamItem = {
  title: string;
  state: boolean;
  member: string;
  handleDropdownItemClick: any;
  setMember: (member: string) => void;
  setShowDropdown: (state: boolean) => void;
};

export type InputPeriodProps = {
  startDate: string;
  setStartDate: any;
  startIndex: number | undefined;
  setStartIndex: any;
  endDate: string;
  setEndDate: any;
  endIndex: number | undefined;
  setEndIndex: any;
};

export type InputContentProps = {
  content: string;
  handleContentChange: any;
  contentRef: any;
  contentInvalid: boolean;
  submitClicked: boolean;
};

export type InputImageProps = {
  filePreviews: string[];
  setFilePreviews: any;
}
