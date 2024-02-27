import { useState } from "react";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import "./input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showCount?: boolean;
  showClear?: boolean;
  value?: string;
  block?: boolean;
}
const Input = (props: InputProps) => {
  const { showCount, showClear, block, ...restProps } = props;
  const [value, setValue] = useState("");
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clear");
    setValue("");
    event.stopPropagation();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div className={`storybook-input ${block && "block"}`}>
      <div style={{ position: "relative" }}>
        <input value={value} onChange={handleChange} {...restProps} />
        {showClear && !!value.length && (
          <button className="clear" onClick={handleClear}>
            x
          </button>
        )}
      </div>
      {showCount && (
        <span className="count">
          {value.length}
          {props.maxLength && ` / ${props.maxLength}`}
        </span>
      )}
    </div>
  );
};

export default Input;
