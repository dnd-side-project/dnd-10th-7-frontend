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
        <div className="bg-purple-main5 max-w-[358px] min-h-[249px] max-h-[259px] rounded-[10px]">
          <div className="flex">
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
          <hr className="w-[316px] text-gray-60 mx-auto mt-[-15px]" />
          {startDate && (
            <div className="text-caption1 ms-5 flex mt-4">
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
