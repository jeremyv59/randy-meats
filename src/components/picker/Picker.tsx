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
    color: "#bb999c",
  }),
  control: (provided, state) => ({
    ...provided,
    height: "42px",
    color: "#bb999c",
    backgroundColor: "#f4fec1",
    borderRadius: "25rem",
    boxShadow: "#bb999c",
    border: "1px solid #bb999c",
    "&:hover": {
      boxShadow: "0px 0px 3px #bb999c",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#f4fec1",
    color: "#bb999c",
    fontSize: "0.8rem",
    fontFamily: "Quicksand",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#bb999c",
    fontSize: "0.8rem",
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
