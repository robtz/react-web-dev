import React from "react";

// Export default class name only function with class, not with conts or let.
export default class AddOption extends React.Component {

    // New Syntax
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = "";
        }
    }

    /*
    // Old Syntax
    // It's necessary to declare the constructor in order to use the props inside this event handler.
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    // Event Handler
    handleAddOption(e) {
        // Avoid the refresh of the browser.
        e.preventDefault();

        // 'e.target' obtains the form object.
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // ES6: We can write only the name of the variable if we are going to asign the variable to a property of the same name.
        // So, the error instruction is the same => "error: error"
        this.setState(() => ({ error }));

         // Clears the text box in the HTML.
        if (!error) {
            e.target.elements.option.value = "";
        }
    }*/

    // && Conditional: If the first element is false, the element doesn't evaluate the 2nd and doesn't render the instruction.
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}