export type InputProps = {
    titleValue: string;     // 제목
    onTitleChange: any;
    subTitleValue: string;  // 부제목
    onSubTitleChange: any;
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
    content: string;
    handleContentChange: any;
    serviceLink: string;
    handleServiceLinkChange: any;
    startDate: string;
    setStartDate: any;
    startIndex: number | undefined;
    setStartIndex: any;
    endDate: string;
    setEndDate: any;
    endIndex: number | undefined;
    setEndIndex: any;
    subTitleRef: any;
    subTitleInvalid: boolean;
    contentRef: any;
    contentInvalid: boolean;
    submitClicked: boolean;
}