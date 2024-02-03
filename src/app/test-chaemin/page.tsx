"use client";
import Button from "@component/components/button";
import Modal from "@component/components/modal";
import { useState } from "react";

export default function Laboratory() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div>
      {/* font test */}
      {/* <div className="text-huge">huge입니다</div>
      <div className="text-head">head입니다</div>
      <div className="text-h1">h1입니다</div>
      <div className="text-title">title입니다</div>
      <div className="text-h2 ">h2입니다</div>
      <div className="text-body1">body1</div>
      <div className="text-body2">body2</div>
      <div className="text-caption1">caption1</div>
      <div className="text-caption2">caption2</div>
      <div className="text-caption3">caption3</div> */}
      {/* button test */}
      <div className="flex flex-row items-center gap-3">
        <Button size="xs">xs button</Button>
        <Button size="sm">sm button</Button>
        <Button size="md">md button</Button>
        <Button size="lg">lg button</Button>
      </div>
      <Button>testestestet</Button>
      <div>color style test about button</div>
      {/* button style test */}
      <div className="flex flex-col gap-3">
        <Button size="xs" color="default">
          xs button
        </Button>
        <Button size="xs" color="active">
          xs button
        </Button>
        <Button size="xs" color="hover">
          xs button
        </Button>
        <Button size="xs" color="gray">
          xs button
        </Button>
        <Button size="xs" color="border">
          xs button
        </Button>
        <Button size="xs" color="black">
          xs button
        </Button>{" "}
        <Button size="xs" className="bg-error-color">
          xs button
        </Button>
        <Modal
          open={true}
          onClose={() => setIsOpen(false)}
          className="w-[600px]"
        >
          <Modal.Title>
            <div>title</div>
          </Modal.Title>
          <Modal.SubTitle>
            <div>SubTitleSubTitleSubTitleSubTitle</div>
          </Modal.SubTitle>
          <Modal.Description>
            <div>
              DescriptionDescriptionDescriptionDescriptionDescriptionDescription
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
            </div>
          </Modal.Description>

          <Modal.Footer>this is footer</Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
