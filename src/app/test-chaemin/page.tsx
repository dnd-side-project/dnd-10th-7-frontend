"use client";

import Button from "@component/components/common-components/button";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import Tag from "@component/components/common-components/tag";
import SignUpModal from "@component/components/signup/SignUpModal";
import { ChangeEvent, useState } from "react";

export default function Laboratory() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);

  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>(
    "www.sendback.co.kr(이미 input이 입력되어 있는 경우)",
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value.replace(/\D/g, ""));
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="flex flex-row items-center gap-3">
        <PurpleInput
          defaultValue={inputValue1}
          onChange={handleChange}
          placeholder="키워드를 입력해주세요"
          shape="smallRounded"
          size="md"
          textSize="md"
          borderSize="md" // 테두리 두께
          backgroundColors="white"
          search
        />
        <Button size="xs" className="font-medium">
          xs button
        </Button>
        <Button size="sm">sm button</Button>
        <Button size="md">md button</Button>
        <Button size="lg">lg button</Button>
      </div>

      {/* tag test */}
      <div className="pt-3 flex flex-wrap gap-4">
        <Tag type="예술/대중문화" status="기획중" />
        <Tag type="건강" status="개발중" />
        <Tag type="금융/핀테크" status="리팩토링중" />
        <Tag type="환경" />
        <Tag type="교육" />
        <Tag type="AI/머신러닝" />
        <Tag type="취미/실용" />
        <Tag type="게임" />
        <Tag type="기타" />
      </div>

      <div>color style test about button</div>
      {/* button style test */}
      <div className="flex flex-col gap-3">
        <Button size="xs" color="default">
          xs button
        </Button>
        <Button size="xs" color="active">
          xs button
        </Button>

        <Button size="xs" color="gray">
          xs button
        </Button>
        <Button size="xs" color="border" onClick={() => setIsOpen3(true)}>
          완료모달 열기
        </Button>

        <Button
          size="xs"
          className="bg-error-color"
          onClick={() => setIsOpen(true)}
        >
          modal open btn
        </Button>

        <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />

        <Button size="xs" color="black" onClick={() => setIsOpen2(true)}>
          InterestModal button
        </Button>
      </div>
    </div>
  );
}
