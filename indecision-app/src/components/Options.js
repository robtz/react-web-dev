import React from "react"; 
import Option from "./Option";

// Stateless Functional Component.
// Implicit Return instead of explicit return.
const Options = (props) => (
    <div>
        <p>The number of currently options is: {props.options.length}</p>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        <ul>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}

                    />))
            }
        </ul>
    </div>
);

export default Options;