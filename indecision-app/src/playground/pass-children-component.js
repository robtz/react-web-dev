import React from "react";
import ReactDOM from "react-dom";

// In order to use the JSX passed inside the component, it's necessary to use 'props.children'.
const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

// The template with JSX can be passed into the component.
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page :D</p>
        </div>
    </Layout>
), document.getElementById("app"));
