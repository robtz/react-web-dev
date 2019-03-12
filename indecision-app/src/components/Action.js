import React from "react"; 

// Stateless Functional Component.
// Implicit Return instead of explicit return.
const Action = (props) => (
    <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

export default Action;