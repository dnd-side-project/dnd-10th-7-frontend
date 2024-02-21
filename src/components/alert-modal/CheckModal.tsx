import { ModalViewProps } from "../signup/LoginModal";
import Button from "../common-components/button";
import { Modal } from "../common-components/modal";

export default function CheckModal({
  isOpen,
  setIsOpen,
  title,
  subTitle,
  mutate,
}: ModalViewProps) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMutate = () => {
    mutate();
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose} className="">
        <Modal.Close onClick={handleClose} />
        <Modal.Title>
          <div>{title}</div>
        </Modal.Title>

        <Modal.Footer className="mt-[18px]">
          <Button
            size="md"
            color="gray"
            className="w-[120px] cursor-pointer me-2"
            onClick={handleClose}
          >
            이전으로
          </Button>
          <Button
            size="md"
            color="default"
            className="w-[120px] cursor-pointer"
            onClick={handleMutate}
          >
            {subTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
