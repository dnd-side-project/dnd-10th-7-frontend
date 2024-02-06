export type ModalProps = {
  open: boolean;
  onClose: () => void;
  className?: string;
  ariaLabel?: string;
  disableKeyboardEvent?: boolean;
  initialFocus?: React.MutableRefObject<HTMLElement | null>; // 모달이 열릴 때 첫번째로 포커스될 요소
  children: React.ReactNode;
};
