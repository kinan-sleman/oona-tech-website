import React from "react";

export default function Process2Icon5({activeIndex}) {
  return (
    <svg width={52} height={52} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M44.4 7.8a4 4 0 0 0-4-4H11.6a4 4 0 0 0-4 4v36.4a4 4 0 0 0 4 4h28.6a4 4 0 0 0 4-4V7.8Zm-2 36.4a2 2 0 0 1-2 2H11.6a2 2 0 0 1-2-2V7.8a2 2 0 0 1 2-2h28.6a2 2 0 0 1 2 2v36.4Z"
        fill={activeIndex === 8 ? "#00A7E1" :"#ACACAC"}
      />
      <path
        d="M21.3 10a1 1 0 0 0-1-1h-6a1 1 0 0 0-1.1 1v6.1a1 1 0 0 0 1 1h6.1a1 1 0 0 0 1-1v-6Zm-6 1h4v4.1h-4v-4ZM23.8 12h7.9a1 1 0 0 0 0-2h-8a1 1 0 1 0 0 2ZM37.8 14.1h-14a1 1 0 1 0 0 2h14a1 1 0 0 0 0-2ZM21.3 21.2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1.1 1v6.1a1 1 0 0 0 1 1h6.1a1 1 0 0 0 1-1v-6Zm-6 1h4v4.1h-4v-4ZM23.8 23.3h7.9a1 1 0 1 0 0-2h-8a1 1 0 0 0 0 2ZM37.8 25.3h-14a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2ZM13.6 34.4h12a1 1 0 0 0 0-2h-12a1 1 0 1 0 0 2ZM37.8 36.5H13.6a1 1 0 1 0 0 2h24.2a1 1 0 1 0 0-2Zm0 4H13.6a1 1 0 1 0 0 2h24.2a1 1 0 1 0 0-2Z"
        fill={activeIndex === 8 ? "#00A7E1" :"#ACACAC"}
      />
    </svg>
  );
}
