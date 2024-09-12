import React from "react";

export default function Process2Icon2({activeIndex}) {
  return (
    <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 24c0 .8-.7 1.5-1.5 1.5H4a1.5 1.5 0 0 1 0-3h6c.8 0 1.5.7 1.5 1.5Zm34 0c0 .8-.7 1.5-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h6c.8 0 1.5.7 1.5 1.5ZM24 36.5c.8 0 1.5.7 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6c0-.8.7-1.5 1.5-1.5Zm0-34c.8 0 1.5.7 1.5 1.5v6a1.5 1.5 0 0 1-3 0V4c0-.8.7-1.5 1.5-1.5ZM18.5 24c0-.8.7-1.5 1.5-1.5h8a1.5 1.5 0 0 1 0 3h-8c-.8 0-1.5-.7-1.5-1.5Z"
        fill={activeIndex === 2 ? "#00A7E1" :"#ACACAC"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 29.5c-.8 0-1.5-.7-1.5-1.5v-8a1.5 1.5 0 0 1 3 0v8c0 .8-.7 1.5-1.5 1.5Z"
        fill={activeIndex === 2 ? "#00A7E1" :"#ACACAC"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 5.5c-3.4 0-6.5.9-9.2 2.5a1.5 1.5 0 0 1-1.6-2.6 21.5 21.5 0 1 1-7.9 7.9A1.5 1.5 0 0 1 8 14.7a18.5 18.5 0 1 0 16-9.3Z"
        fill={activeIndex === 2 ? "#00A7E1" :"#ACACAC"}
      />
    </svg>
  );
}
