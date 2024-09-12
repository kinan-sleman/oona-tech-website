const formatText = (text) => {
  return text.split("\n").map((item, index) => (
    <span key={index}>
      {item}
      <br />
    </span>
  ));
};

export { formatText };