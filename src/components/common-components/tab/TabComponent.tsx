import Tab from "./Tab"

export default function TabComponent () {
    return (
        <>
            <div className="flex gap-[14px] mb-[14px] min-w-[580px]">
                <Tab content="예술/대중문화"/>
                <Tab content="환경"/>
                <Tab content="건강"/>
                <Tab content="취미/실용"/>
            </div>
            <div className="flex gap-[14px] min-w-[580px]">
                <Tab content="금융/핀테크"/>
                <Tab content="교육"/>
                <Tab content="게임"/>
                <Tab content="AI/머신러닝"/>
            </div>
        </>
    )
}