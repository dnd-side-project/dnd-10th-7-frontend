'use client'
import { useCallback, useMemo, useState } from "react";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    differenceInCalendarDays,
    getMonth,
} from "date-fns";

type CalendarProps = {
    clickedIndex: number | undefined;
    setClickedIndex: any;
    clickedDate: string;
    setClickedDate: any;
}

const Calendar = ({
    clickedIndex,
    setClickedIndex,
    clickedDate,
    setClickedDate
}: CalendarProps) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const weekMock = ["S", "M", "T", "W", "T", "F", "S"];

    const nextMonthHandler = useCallback(() => {
        setCurrentDate(addMonths(currentDate, 1));
    }, [currentDate]);

    const prevMonthHandler = useCallback(() => {
        setCurrentDate(subMonths(currentDate, 1));
    }, [currentDate]);

    const createMonth = useMemo(() => {
        const monthArray = [];
        let day = startDate;
        while (differenceInCalendarDays(endDate, day) >= 0) {
            monthArray.push(day);
            day = addDays(day, 1);
        }
        return monthArray;
    }, [startDate, endDate]);

    return (
        <section className="pt-6 flex flex-col items-center max-w-[264px]">

            {/* 달력 상단 */}
            <div className="flex items-center gap-8 mb-8">
                <ArrowBackIosNewRoundedIcon className="text-gray-60 w-4 hover:text-gray-100" onClick={prevMonthHandler} />
                <div className="text-body1 font-medium">
                    {format(currentDate, "yyyy.MM")}
                </div>
                <ArrowForwardIosRoundedIcon className="text-gray-60 w-4 hover:text-gray-100" onClick={nextMonthHandler} />
            </div>
            
            {/* 날짜 */}
            <div className="flex flex-wrap w-full text-body1 w-[253px]">
                {createMonth.map((v, i) => {
                    const validation = getMonth(currentDate) === getMonth(v);

                    const isSunday = v.getDay() === 0;
                    const isSaturday = v.getDay() === 6;

                    return (
                    // 일
                    <div
                        key={`date${i}`}
                        className={`text-center ${
                        validation 
                            ? (isSunday 
                                ? "text-error-main" 
                                : (isSaturday 
                                ? "text-blue-main1" 
                                : "")) 
                            : "text-gray-60"
                        } w-[14.2857143%] mb-2`}
                        onClick={() => {
                            setClickedDate(format(v, 'yyyy-MM-dd'))
                            setClickedIndex(i)
                        }
                        }
                    >
                        <div className={`h-[30px] w-[30px] flex items-center justify-center font-medium ${
                            clickedIndex === i ? "text-white bg-purple-main1 rounded-full" : ""
                        }`}>{format(v, "d")}</div>
                    </div>
                    
                    );
                })}

                
            </div>
            </section>
    );
};

export default Calendar;
