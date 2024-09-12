function CheckBox({ defaultChecked, checked, onChange=null, name }) {
  return (
    <div className="box-check">
      <input
        type="checkbox"
        checked={checked}
        id="gggg"
        value="gggg"
        className="cursor-pointer focus:!border-none"
        defaultChecked={defaultChecked}
        onChange={(e) => {
          onChange && onChange(e.target.checked);
        }}
      />
    </div>
  );
}

export default CheckBox;
