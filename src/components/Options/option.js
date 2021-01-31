import React from "react";
import Select from "react-select";

import "./option.css";
import "react-select/dist/react-select.css";

const Option = ({ selectedTraversal, handleChange }) => (
    <div className="option-container">
        <Select
            name="sort-select"
            value={selectedTraversal && selectedTraversal.value}
            onChange={handleChange}
            className="select-filed"
            options={[
                { label: "preorder", value: "preOrder" },
                { label: "inorder", value: "inOrder" },
                { label: "postorder", value: "postOrder" },
                { label: "level order", value: "level order" },
            ]}
            clearable={false}
        />
    </div>
);

export default Option;