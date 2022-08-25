import { Form, Input } from "antd";
import React, { useState } from "react";
import Picker, { MyOptionType } from "../picker/Picker";
import "./search_form.css";

const options: MyOptionType[] = [
  { value: "Très facile", label: "Très facile" },
  { value: "facile", label: "facile" },
  { value: "Difficile", label: "difficile" },
  { value: "Très facile", label: "Très facile" },
];

const SearchForm: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<MyOptionType>(
    options[0]
  );

  const onChangeSelectedDifficulty = (difficulty: MyOptionType) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <Form>
      <Form.Item>
        <Input
          className="search_input"
          type="text"
          placeholder="Chercher une recette, ou un aliment..."
        />
      </Form.Item>
      <div className="picker_container">
        <Form.Item rules={[{ type: "number", min: 1, max: 25 }]}>
          <div className="container_selector">
            <label className="input_label">Choisir le nombre de recettes</label>
            <Input
              className="input_number"
              min="1"
              max="25"
              type="number"
            ></Input>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="container_selector">
            <Picker
              labelName="Difficulté"
              value={selectedDifficulty}
              options={options}
              onChange={onChangeSelectedDifficulty}
            ></Picker>
          </div>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchForm;
