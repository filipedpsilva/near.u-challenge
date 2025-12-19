import { MouseEventHandler } from "react";

import ChevronLeftIcon from "@atlaskit/icon/core/chevron-left";

export default function GoBackButton(props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { onClick } = props;
  return (
    <div
      className="flex mt-2 w-40 bg-gray-500 h-auto hover:bg-gray-400/70 cursor-pointer rounded mb-4 items-center justify-center"
      title="Go back button"
    >
      <ChevronLeftIcon label="Go back" />
      <button className="cursor-pointer w-full" onClick={onClick}>
        Go back
      </button>
    </div>
  );
}
