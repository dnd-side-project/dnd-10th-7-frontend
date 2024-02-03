import { Dialog, Transition } from "@headlessui/react";
import { ModalProps } from "./Modal.types";
import { ModalProvider } from "./ModalContext";
import { Fragment } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const variants = {
  container:
    "rounded overflow-hidden flex flex-col ml-auto mr-auto bg-white border border-gray-40",
  title: "text-title font-bold flex items-center justify-center ",
  subTitle: "text-h1 text-red-500",
  body: "flex flex-col bg-gray p-5",
  description: "bg-gray-500 p-5",
  footer: "h-[68px] flex justify-center items-center pt-3 pr-5 pb-[18px] pl-5",
  divider: "h-[1px]",
  close:
    "w-8 h-8 items-center rounded-lg p-[6px] text-h2 text-white hover:cursor-pointer hover:bg-[#00000015]",
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
          <ModalContainer className={className}>{children}</ModalContainer>
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

// 모달 내부 Body 컴포넌트(모달의 중간)
Modal.Body = function ModalBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={twMerge(variants.body, className)}>{children}</div>;
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

// 모달 Divider 컴포넌트(모달의 구분선)
Modal.Divider = function ModalDivider({ className }: { className?: string }) {
  return <hr className={twMerge(variants.divider, className)} />;
};

export default Modal;
