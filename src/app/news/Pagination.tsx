import { Button } from "@/components/global/Button/Button";
import React from "react";

export const PaginationControls = ({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: any) => {
  const renderButton = (handleClick: any, text: string, isVisible: boolean) => {
    return isVisible ? (
      <Button onClick={handleClick}>{text}</Button>
    ) : (
      <div className="invisible">
        <Button disabled>{text}</Button>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-between px-4 py-3">
      {renderButton(onPrevious, "Previous", hasPrevious)}
      {renderButton(onNext, "Next", hasNext)}
    </div>
  );
};
