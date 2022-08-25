import React from "react";
import "./picker.css";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
} from "react-select";

export type MyOptionType = {
  label: string;
  value: string;
};

export interface ISelectProps {
  labelName?: string;
  options: MyOptionType[];
  value: MyOptionType | MyOptionType[];
  onChange?: any;
}

export type IsMulti = false;

const customStyles: StylesConfig<
  MyOptionType,
  IsMulti,
  GroupBase<MyOptionType>
> = {
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    width: "100%",
    color: "red",
  }),
  control: (provided, state) => ({
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
  option: (provided) => ({
    ...provided,
    backgroundColor: "lightgray",
    color: "#284b63",
  }),
};

const Picker: React.FC<ISelectProps> = ({
  labelName,
  options,
  value,
  onChange,
}) => {
  return (
    <React.Fragment>
      <label className="label_name">{labelName}</label>
      <Select
        styles={customStyles}
        isSearchable={false}
        value={value}
        onChange={onChange}
        options={options}
      ></Select>
    </React.Fragment>
  );
};

export default Picker;
