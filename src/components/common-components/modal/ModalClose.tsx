import CloseIcon from "@mui/icons-material/Close";
import { twMerge } from "tailwind-merge";
import { variants } from "./Modal";

export default function ModalClose({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className="flex justify-end cursor-pointer">
      <CloseIcon
        type="button"
        className={
          (twMerge(variants.close, className),
          "text-black hover:bg-gray-20 hover:rounded")
        }
        onClick={onClick}
      />
    </div>
  );
}

ModalClose.defaultProps = {
  className: "",
};
