import React from "react";

// Stateless Functional Component.
// Implicit Return instead of explicit return.
const Option = (props) => (
    <div>
            <li>{props.optionText}</li>
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
);

export default Option;