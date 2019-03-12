// Terminal command:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

// Class Based Component 
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    // REACT LIFECYCLES
    // Fired in order to put the elements inside the DOM.
    componentDidMount() {
        console.log("ComponentDidMount!");
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
            console.log("Fetching Data!");
        } catch (e) {
            //Do nothing at all.
        }
    }

    // Fired after a component was modified.
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate!");
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("Saving Data!");
        }
    }

    // Fired when the component goes away. (Delete components)
    componentWillUnmount() {
        console.log("ComponentWillUnmount!");
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        alert(randomOption);
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item!";
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = "The app that is going to decide for you my friend!";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// HEADER: Stateless Functional Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

// HEADER: Default Props
Header.defaultProps = {
    title: "Indecision"
}

// ACTION: Stateless Functional Component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

// OPTION: Stateless Functional Component
const Option = (props) => {
    return (
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
}

const Options = (props) => {
    return (
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
}

class AddOption extends React.Component {

    //It's necessary to declare the constructor in order to use the props inside this event handler.
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    //Event Handler
    handleAddOption(e) {
        // Avoid the refresh of the browser.
        e.preventDefault();

        // 'e.target' obtains the form object.
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // ES6: We can write only the name of the variable if we are going to asign the variable to a propertie of the same name
        // So, the error instruction is the same => "error: error"

        this.setState(() => ({ error }));

         // Clears the text box in the HTML.
        if (!error) {
            e.target.elements.option.value = "";
        }
    }

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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));