"use client";

import Button from "./components/button";

export default function Laboratory() {
  return (
    <>
      {/* button test */}
      <div className="text-huge">huge입니다</div>
      <div className="text-head">head입니다</div>
      <div className="text-h1">h1입니다?</div>
      <div className="text-title">title입니다</div>

      <div className="text-h2">h2입니다</div>

      <div className="text-body1">body1</div>
      <div className="text-body2">body2</div>
      <div className="text-caption1">caption1</div>
      <div className="text-caption2">caption2</div>
      <div className="text-caption3">caption3</div>

      <Button size="xs">xs button</Button>
      <Button size="sm">sm button</Button>
      <Button size="md">md button</Button>
      <Button size="lg">lg button</Button>
    </>
  );
}
