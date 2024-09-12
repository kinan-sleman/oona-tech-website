function SliderArrow({ color }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.2416 14.5642L6.31348 13.5845L12.3463 7.5001L6.31348 1.41574L7.2416 0.436035L14.3057 7.5001L7.2416 14.5642Z"
        fill={color}
      />
      <path
        d="M13.3262 8.22206H0.951172V6.77832H13.3262V8.22206Z"
        fill={color}
      />
    </svg>
  );
}

export default SliderArrow;
