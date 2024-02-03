export type ModalProps = {
  open: boolean; // 모달의 오픈 여부
  onClose: () => void; // 모달 닫기
  className?: string; // 모달 컨테이너 클래스
  ariaLabel?: string; // 모달 컨텐츠 라벨 (스크린리더)
  disableKeyboardEvent?: boolean; // 'ESCAPE' key 눌렸을 때 닫기 여부
  initialFocus?: React.MutableRefObject<HTMLElement | null>; // 모달이 열릴 때 첫번째로 포커스될 요소
  children: React.ReactNode;
};
