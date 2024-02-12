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
        <section className="p-5 flex flex-col items-center max-w-[200px]">

            {/* 달력 상단 */}
            <div className="flex items-center gap-8 mb-1">
                <ArrowBackIosNewRoundedIcon className="text-gray-60 w-4 hover:text-gray-100" onClick={prevMonthHandler} />
                <div className="text-caption1">
                    {format(currentDate, "yyyy.MM")}
                </div>
                <ArrowForwardIosRoundedIcon className="text-gray-60 w-4 hover:text-gray-100" onClick={nextMonthHandler} />
            </div>

            {/* 요일 */}
            <div className="flex justify-between w-full max-w-[150px] p-2 text-caption3">
                {weekMock.map((v, i) => (
                    <div key={`day${i}`} className={`text-center ${i === 0 ? 'text-error-main' : (i === 6 ? 'text-blue-main' : '')}`}>
                        {v}
                    </div>
                ))}
            </div>
            
            {/* 날짜 */}
            <div className="flex flex-wrap justify-between w-full  text-caption3">
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
                        } w-[14.2857143%]`}
                        onClick={() => {
                            setClickedDate(format(v, 'yyyy-MM-dd'))
                            setClickedIndex(i)
                        }
                        }
                    >
                        <div className={`h-[22px] w-[22px] flex items-center justify-center ${
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
