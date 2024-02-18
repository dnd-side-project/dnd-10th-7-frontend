import { Dispatch, SetStateAction } from "react";

export type TabProps = {
    content: string;
    interestedList: string[];
    setInterestedList: Dispatch<SetStateAction<string[]>>;
}