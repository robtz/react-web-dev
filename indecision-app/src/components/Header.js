import React from "react"; 

// Stateless Functional Component.
// Implicit Return instead of explicit return.
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

// Default Props
Header.defaultProps = {
    title: "Indecision"
};

export default Header;