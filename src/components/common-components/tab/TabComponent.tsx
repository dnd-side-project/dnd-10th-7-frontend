import Tab from "./Tab"
import { Dispatch, SetStateAction } from "react";

interface TabProps {
    interestedList: string[];
    setInterestedList: Dispatch<SetStateAction<string[]>>;
}

export default function TabComponent ({
    interestedList, 
    setInterestedList
}: TabProps) {
    return (
        <>
            <div className="flex gap-[14px] mb-[14px] min-w-[580px]">
                <Tab content="예술/대중문화" interestedList={interestedList} setInterestedList={setInterestedList}/>
                <Tab content="환경" interestedList={interestedList} setInterestedList={setInterestedList}/>
                <Tab content="건강" interestedList={interestedList} setInterestedList={setInterestedList}/>
                <Tab content="취미/실용" interestedList={interestedList} setInterestedList={setInterestedList}/>
            </div>
            <div className="flex gap-[14px] min-w-[580px]">
                <Tab content="금융/핀테크" interestedList={interestedList} setInterestedList={setInterestedList}/>
                <Tab content="교육" interestedList={interestedList} setInterestedList={setInterestedList}/>
                <Tab content="게임" interestedList={interestedList} setInterestedList={setInterestedList}/>
                <Tab content="AI/머신러닝" interestedList={interestedList} setInterestedList={setInterestedList}/>
            </div>
        </>
    )
}