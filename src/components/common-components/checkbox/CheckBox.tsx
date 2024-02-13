import { CheckBoxProps } from ".";

export const CheckBox = ({
  options,
  selectedOption,
  handleCheckBoxChange,
}: CheckBoxProps) => {
  return (
    <div className="flex">
      {options.map((option) => (
        <div key={option} className="flex items-center me-7">
          <input
            type="checkbox"
            id={option}
            className="hidden"
            checked={selectedOption === option}
            onChange={() => handleCheckBoxChange(option)}
          />
          <label
            htmlFor={option}
            className={`w-5 h-5 border border-1 rounded-[3px] ${
              selectedOption === option ? "bg-purple-main1" : "border-gray-40"
            } me-2 cursor-pointer`}
          ></label>
          <div className="text-h2">{option}</div>
        </div>
      ))}
    </div>
  );
};
