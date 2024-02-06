import { Dialog, Transition } from "@headlessui/react";
import { ModalProps } from "./Modal.types";
import { ModalProvider } from "./ModalContext";
import { Fragment } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import CloseIcon from "@mui/icons-material/Close";

const variants = {
  container:
    "p-[30px] rounded-[20px] overflow-hidden flex flex-col ml-auto mr-auto bg-white border border-gray-40",
  title: "text-title font-bold flex items-center justify-center ",
  subTitle:
    "pt-[16px] flex items-center justify-center text-body2 text-gray-80",
  description: "py-[43px]",
  footer: "h-[68px] flex justify-center items-center pt-3 pr-5 pb-[18px] pl-5",
  close:
    "cursor-pointer w-8 h-8 items-center rounded-lg p-[6px] text-h2 text-white",
};

function ModalContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx(variants.container, className)}>{children}</div>;
}

// 모달 오픈 시 배경 흐려지게 하는 컴포넌트
function BackDrop() {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/30"
        aria-hidden="true"
      />
    </Transition.Child>
  );
}

function Modal({
  open,
  onClose,
  ariaLabel,
  className,
  initialFocus,
  disableKeyboardEvent,
  children,
}: ModalProps) {
  return (
    <ModalProvider>
      <Transition show={open} as={Fragment}>
        <Dialog
          onClose={() => (disableKeyboardEvent ? {} : onClose())}
          initialFocus={initialFocus}
          className="relative z-50"
          id="sendback-modal"
          aria-label={ariaLabel}
        >
          <BackDrop />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen">
              <ModalContainer className={className}>{children}</ModalContainer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </ModalProvider>
  );
}

// 모달 Title 컴포넌트(모달의 상단 타이틀)
Modal.Title = function ModalTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={twMerge(variants.title, className)}>{children}</div>;
};

// 모달 Close 컴포넌트(모달의 상단 닫기 버튼)
Modal.Close = function ModalClose({
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
};

// 모달 SubTitle 컴포넌트(모달의 상단 서브 타이틀)
Modal.SubTitle = function ModalSubTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge(variants.subTitle, className)}>{children}</div>
  );
};

// 모달 Description 컴포넌트(모달의 설명) - 모달 기본 영역
Modal.Description = function ModalDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge(variants.description, className)}>{children}</div>
  );
};

// 모달 내부 Footer 컴포넌트(모달하단: 확인/취소 버튼 등)
Modal.Footer = function ModalFooter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={twMerge(variants.footer, className)}>{children}</div>;
};

export default Modal;
