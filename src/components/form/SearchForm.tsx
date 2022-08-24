import { Form, Input } from "antd";
import React from "react";
import "./search_form.css";

const SearchForm: React.FC = () => {
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
        <Form.Item rules={[{ type: "number", min: 1, max: 25 }]}>
          <div className="container_selector">
            <label className="input_label">Difficulté</label>
            <Input
              className="input_number"
              min="1"
              max="25"
              type="number"
            ></Input>
          </div>
        </Form.Item>
      </div>
    </Form>

    // <Form>
    //   <Form.Group className="mt-6">
    //     <Form.Label className="text-light">
    //       Rechercher une recette ou un ingrédient
    //     </Form.Label>
    //   </Form.Group>
    // </Form>
  );
};

export default SearchForm;
