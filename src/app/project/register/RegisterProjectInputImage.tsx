"use client";
import { useState, useRef, ChangeEvent } from "react";
import Button from "@component/components/common-components/button/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { InputImageProps } from "@component/types/Project";
import { Modal } from "@component/components/common-components/modal";

const RegisterProjectInputImage = ({
  filePreviews,
  setFilePreviews,
  fileList,
  setFileList,
}: InputImageProps) => {
  const [isFirstOpen, setIsFirstOpen] = useState<boolean>(false);
  const [fileModalPreviews, setFileModalPreviews] = useState<string[]>([]);

  // file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: FileList = e.target.files;
      const previews: string[] = [...fileModalPreviews];
      const updatedFileList: File[] = [...fileList];

      // 6장 이상 등록한 경우
      if (fileModalPreviews.length + files.length > 5) {
        alert("5장까지만 등록 가능해요");
        return;
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        updatedFileList.push(file);

        reader.onloadend = () => {
          previews.push(reader.result as string);
          setFileModalPreviews([...previews]);
        };

        reader.readAsDataURL(file);
      }

      setFileList(updatedFileList);
    }
  };

  // 사진 등록
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 사진 제거
  const handleCancelClick = (index: number) => {
    const updatedModalPreviews = [...fileModalPreviews];
    updatedModalPreviews.splice(index, 1);
    setFileModalPreviews(updatedModalPreviews);
    const updatedFileList = [...fileList];
    updatedFileList.splice(index, 1);
    setFileList(updatedFileList);
  };

  const hadleImageModalToMain = () => {
    // 사진 정보 전달 후
    setFilePreviews(fileModalPreviews);
    // 모달 닫기
    setIsFirstOpen(false);
  };

  return (
    <>
      {/* 사진 등록하기 */}
      <Button
        className="flex items-center gap-2"
        onClick={() => setIsFirstOpen(true)}
      >
        <AddCircleOutlinedIcon className="text-purple-main3" />
        {filePreviews.length === 0 ? <>사진 등록하기</> : <>사진 수정하기</>}
      </Button>

      {/* 사진 메인에서 미리보기 */}
      <div className="flex mt-[30px]">
        {filePreviews &&
          filePreviews.map((preview, index) => (
            <Image
              key={index}
              src={preview}
              alt={`preview ${index + 1}`}
              width={162}
              height={120}
              className="min-w-[162px] h-[120px] object-cover mr-2 rounded-[5px]"
            />
          ))}
      </div>

      {/* 사진 등록 1번 모달 */}
      <Modal
        open={isFirstOpen}
        onClose={() => setIsFirstOpen(false)}
        className="min-w-[480px]"
      >
        <Modal.Title>
          <div>사진등록</div>
        </Modal.Title>
        <Modal.SubTitle>
          <div className="flex flex-col justify-center text-body2">
            <div>원하시는 사진을 업로드 해주세요.</div>
            <div className="mx-auto">최대 5장까지 등록 가능합니다.</div>
          </div>
        </Modal.SubTitle>
        <Modal.Description>
          <>
            {/* 사진 등록 최초인 경우 */}
            {fileModalPreviews.length === 0 ? (
              <div className="w-[380px] h-[120px] bg-gray-40 rounded-[5px] flex flex-col justify-center items-center mx-auto">
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
                <p className="text-h2 text-purple-main1">사진 업로드 하기</p>
              </div>
            ) : (
              <>
                {/* 사진 등록이 1개라도 된 경우 */}
                <div className="flex justify-center">
                  {fileModalPreviews?.map((preview, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={preview}
                        alt={`preview ${index + 1}`}
                        width={162}
                        height={120}
                        className="min-w-[162px] h-[120px] object-cover mr-2 rounded-[5px]"
                      />
                      <CancelIcon
                        className="absolute top-[-7px] right-0 cursor-pointer text-gray-80"
                        fontSize="medium"
                        onClick={() => handleCancelClick(index)}
                      />
                    </div>
                  ))}
                  {fileModalPreviews.length < 5 && (
                    <div className="min-w-[162px] h-[120px] bg-gray-40 rounded-[5px] flex flex-col justify-center items-center">
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
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        </Modal.Description>
        <Modal.Footer>
          <div className="flex space-x-[8px]">
            <Button
              onClick={() => setIsFirstOpen(false)}
              className="min-w-[123px]"
              color="gray"
            >
              닫기
            </Button>
            <Button className="min-w-[123px]" onClick={hadleImageModalToMain}>
              등록하기
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterProjectInputImage;
