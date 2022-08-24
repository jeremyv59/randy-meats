import React, { CSSProperties } from "react";
import "./picker.css";
import Select, {
  ControlProps,
  CSSObjectWithLabel,
  MenuProps,
  OptionProps,
  StylesConfig,
} from "react-select";

type MyOptionType = {
  label: string;
  value: string;
};

const options: MyOptionType[] = [
  { value: "Très facile", label: "Très facile" },
  { value: "facile", label: "facile" },
  { value: "Difficile", label: "difficile" },
  { value: "Très facile", label: "Très facile" },
];

const customStyles = {
  menu: (provided: CSSObjectWithLabel, state: ControlProps) => ({
    ...provided,
    width: "100%",
    color: "red",
  }),
  control: (provided: CSSObjectWithLabel, state: ControlProps) => ({
    ...provided,
    maxHeight: 36,
    color: "#284b63",
    border: "1px solid #284b63",
    borderRadius: "0.5rem",
    marginTop: "0.2rem",
    boxShadow: state.isFocused ? "#284b63" : "none",
    "&:hover": {
      border: "1px solid #284b63",
      boxShadow: "0px 0px 3px #284b63",
    },
  }),
  option: (provided: CSSObjectWithLabel, state: ControlProps) => ({
    ...provided,
    backgroundColor: state.isFocused && "lightgray",
    color: "#284b63",
  }),
};

const Picker = () => {
  return <div>Picker</div>;
};

export default Picker;
