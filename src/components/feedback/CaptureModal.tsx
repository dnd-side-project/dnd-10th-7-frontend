"use client";

import { ChangeEvent, useRef, useState } from "react";
import Button from "../common-components/button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Image from "next/image";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import clsx from "clsx";
import { RewardModal } from "./RewardModal";
import { ModalViewProps } from "../sign-up/LoginModal";
import Modal from "../common-components/modal";

export const CaptureModal = (props: ModalViewProps) => {
  const { isOpen, setIsOpen } = props;

  const [uploadImg, setUploadImg] = useState<File[]>([]);
  const [previewImg, setPreviewImg] = useState<string>("");

  const handleClose = () => {
    // close event
    setIsOpen(false);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files;
      setUploadImg(Array.from(file));

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPreviewImg(reader.result);
        }
      };

      reader.readAsDataURL(file[0]);
    }
  };

  // 사진 등록
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const checkData = [
    {
      id: 0,
      checked: false,
      content: "피드백을 확실히 제출하셨는지 한번 더 확인 부탁드려요.",
    },
    {
      id: 1,
      checked: false,
      content:
        "추후 잘못된 화면 업로드 확인 시, 지급된 리워드가 취소될 수 있으니 유의해주세요.",
    },
    {
      id: 2,
      checked: false,
      content: "거짓 작성이나 기타 문제 확인 시, 이용이 제한될 수 있어요.",
    },
  ];
  const [checkedData, setCheckedData] = useState(checkData);

  const handleCheckBoxChange = (itemId: number) => {
    const updatedCheckData = checkedData.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCheckedData(updatedCheckData);
    console.log("hi", checkedData);
  };

  const disabledBtn = () => {
    const isTrue = checkedData.map((item) => item.checked);
    if (isTrue.every((item) => item === true) && previewImg) {
      return false;
    } else return true;
  };

  // next modal
  const [rewardModalOpen, setRewardModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log("clicked next-step");
    setIsOpen(false);
    setRewardModalOpen(true);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose} className="">
        <Modal.Close onClick={handleClose} />

        <Modal.Description className="px-[20px]">
          <>
            {previewImg.length === 0 ? (
              <div className="w-[680px] h-[330px] bg-purple-main5 rounded-[20px] flex flex-col justify-center items-center mx-auto">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                <AddCircleOutlinedIcon
                  className="text-purple-main1 mb-[7px] cursor-pointer"
                  fontSize="large"
                  onClick={handleIconClick}
                />
                <p className="text-h2 text-purple-main1 ">사진 업로드 하기</p>
              </div>
            ) : (
              <div>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                <Image
                  src={previewImg}
                  alt={`preview-img`}
                  width={162}
                  height={120}
                  className="w-[680px] h-[330px] object-cover mr-2 rounded-[5px]"
                />
                <div
                  onClick={handleIconClick}
                  className="mt-4 flex justify-end mr-2 underline text-body1 text-purple-main1 cursor-pointer"
                >
                  사진 재업로드
                </div>
              </div>
            )}
            <div className="">
              <div className="text-title pt-[50px] pb-[32px]">
                마지막으로 아래 사항들을 체크해주세요!
              </div>
              <div className="flex flex-col gap-[17px]">
                {checkedData.map((item, idx) => {
                  return (
                    <div
                      className="flex items-center"
                      key={idx}
                      onClick={() => handleCheckBoxChange(item.id)}
                    >
                      {/* 체크박스를 숨기고, 대신 아이콘을 클릭 가능한 요소로 사용 */}
                      <div
                        className={clsx(
                          "w-5 h-5 border border-2 rounded-[3px] border-purple-main1 me-2 cursor-pointer",
                          item.checked ? "bg-white" : ""
                        )}
                      >
                        {item.checked && (
                          <CheckBoxIcon
                            style={{
                              fontSize: "1.5rem",
                            }}
                            className="text-purple-main1 ms-[-4px] mt-[-9px]"
                          />
                        )}
                      </div>
                      <div className="text-body1 pr-[16px]">{item.content}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </Modal.Description>

        <Modal.Footer className="flex items-center">
          <Button
            size="lg"
            disabled={disabledBtn()}
            color={disabledBtn() ? "disabled" : "default"}
            className="w-full"
            onClick={handleClick}
          >
            피드백 완료하고 리워드 받기
          </Button>
        </Modal.Footer>
      </Modal>

      <RewardModal isOpen={rewardModalOpen} setIsOpen={setRewardModalOpen} />
    </>
  );
};
