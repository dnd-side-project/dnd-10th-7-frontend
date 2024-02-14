import React from "react";
import { RadioCheckBoxProps } from ".";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const RadioCheckBox = ({
  options,
  selectedOption,
  handleCheckBoxChange,
  className,
}: RadioCheckBoxProps) => {
  return (
    <div className={className}>
      {options.map((option) => (
        <div key={option} className="flex items-center me-7">
          <input
            type="radio"
            id={option}
            className="hidden"
            checked={selectedOption === option}
            onChange={() => handleCheckBoxChange(option)}
          />
          <label
            htmlFor={option}
            className={`w-5 h-5 border border-1 rounded-[3px] ${
              selectedOption === option ? "border-0" : "border-gray-40"
            } me-2 cursor-pointer`}
          >
            {selectedOption === option && (
              <CheckBoxIcon
                style={{ fontSize: "1.5rem" }}
                className="text-purple-main1 ms-[-3px] mt-[-6.5px]"
              />
            )}
          </label>
          <div className="text-h2">{option}</div>
        </div>
      ))}
    </div>
  );
};
