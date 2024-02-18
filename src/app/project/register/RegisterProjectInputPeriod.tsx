import { InputPeriodProps } from "@component/types/Project";
import RegisterProjectTitle from "./RegisterProjectTitle";
import Calendar from "./Calendar";

const RegisterProjectInputPeriod = ({
  startDate,
  setStartDate,
  startIndex,
  setStartIndex,
  endDate,
  setEndDate,
  endIndex,
  setEndIndex,
}: InputPeriodProps) => {
  return (
    <>
      {/* 기간 */}
      <div className="mt-[74px]">
        <RegisterProjectTitle title="기간" />
        <div className="bg-purple-main5 max-w-[605px] min-h-[334px] max-h-[374px] rounded-[10px]">
          <div className="flex justify-center gap-x-8 px-6">
            {/* 시작하는 날 */}
            <Calendar
              clickedIndex={startIndex}
              setClickedIndex={setStartIndex}
              clickedDate={startDate}
              setClickedDate={setStartDate}
            />
            {/* 끝나는 날 */}
            <Calendar
              clickedIndex={endIndex}
              setClickedIndex={setEndIndex}
              clickedDate={endDate}
              setClickedDate={setEndDate}
            />
          </div>
          <div className="border border-1 border-purple-main2 w-[90%] mx-auto mt-2"></div>
          {startDate && (
            <div className="text-body2 font-medium ms-7 flex mt-5 pb-6">
              {startDate}
              {endDate && <> - {endDate}</>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterProjectInputPeriod;
