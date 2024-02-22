import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Item } from "@component/types/User";

const MyPageLevelToolTip = () => {
  const items: Item[] = [
    { level: "Lv.1 주먹밥", pullUpCount: 3, type: "기본" },
    { level: "Lv.2 솜주먹", pullUpCount: 6, type: "피드백 5회" },
    { level: "Lv.3 물주먹", pullUpCount: 10, type: "피드백 10회" },
    { level: "Lv.4 돌주먹", pullUpCount: 15, type: "피드백 15회" },
    { level: "Lv.5 불주먹", pullUpCount: 20, type: "피드백 20회" },
  ];

  return (
    <div className="absolute top-6 right-[14px] bg-white rounded-[10px] shadow-2xl w-[321px] h-[362px] p-5">
      <div className="flex items-center  mb-[25px]">
        <HelpOutlineIcon className="text-purple-main1 me-1 w-[15px] h-[15px]" />
        <p className="text-body3">레벨 가이드</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="mx-auto">
          <div className="flex gap-[50px] text-body3 mb-[7px]">
            <span className="min-w-[57px]">수준</span>
            <span className="min-w-[49px]">혜택</span>
            <span className="min-w-[59px]">달성조건</span>
          </div>
          <hr className="border-[1px] bg-gray-60" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          {items.map((item, index) => (
            <div key={index} className="mx-auto mt-[5px]">
              <div className="flex gap-[50px] text-caption1 mb-[5px]">
                <span className="min-w-[57px] font-medium">{item.level}</span>
                <span className="min-w-[49px] font-medium">{`끌올 ${item.pullUpCount}회`}</span>
                <span className="min-w-[59px] font-medium">{item.type}</span>
              </div>
              <hr className="border-[0.5px] bg-gray-40" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-caption1 flex flex-col gap-y-[6px] ms-[10px] mt-4">
        <span className="font-medium">
          * 레벨은 <span className="text-purple-main1">총 5단계</span> 입니다.
        </span>
        <span className="font-medium">
          * 레벨은 <span className="text-purple-main1">피드백 횟수</span>에 따라
          업데이트 됩니다.
        </span>
        <span className="font-medium">
          * 레벨 등급에 따라 <span className="text-purple-main1">끌올</span>{" "}
          횟수가 제한됩니다.
        </span>
        <span className="font-medium">
          * 혜택은 <span className="text-purple-main1">매주 1회</span>{" "}
          제공됩니다.
        </span>
      </div>
    </div>
  );
};

export default MyPageLevelToolTip;
