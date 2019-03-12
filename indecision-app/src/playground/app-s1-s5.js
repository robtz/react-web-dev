// Terminal command:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

// ===== CLASS BASED COMPONENTS ====
// React component needs one method to be defined. This method has to be 'render()'.
//
// In order to use the feature of React components, we have to declare our classes with 'extends React.Component'.
// The 'Component' is a method from the 'React' class.
//
// Using React, it's a must that the classes have to start with an UPPERCASE. Otherwise, the components aren't be rendered.
// Manage lifecycles.

// ===== STATELESS FUNCTIONAL COMPONENTS ====
// This type of component doesn't have state and are only functions.
// This type of component accept props. In this case the props are used as "props.name" and not "this.props.name" which is how it is invoked
// in the classes.
// This type of component is fastest because it don't have to charge all the class and extends behaviour.
// Doesn't manage lifecycles.

// ==== PROPS ====
// Pass parameters to the components to communicate between them.
// In order to PASS the parameter, we have to write: nameProp = value.
// In order to ACCESS to the parameter, we have to write: this.props.nameProp.

// ==== EVENTS ====
// The functions used for the events will be declared inside each class (methods) and not global functions.
// In order to call the class methods, we have to use the word THIS in order to access it at the event.

// ==== STATE ====
// The steps in order to change a state are 1) Setup default state object, 2) Component is rendered with default values (Automatically)
// 3) The state change based on an event, 4) Component is re-rendered using the new state values (Automatically).

// === BINDING ===
// This is the most efficient way to bind the event handler with the correct context because it makes the 
// binding the first time when the component it's initialized.

// The other form is put .bind direct in the event handler inside the render() function but this is not so efficient
// because in order to make the binding, the component has to execute the render() function over and over again.

// It's important to override the parent function and the minimun steps that we have to do are pass the props to the constructor
// and pass the same props to the parent because the parent class needs this parameters and it's important to pass them in order
// to have all correct and don't break anything.  
/*constructor(props) {
    super(props);

    // The bind method is passing the context of the function (constructor) to the event handler. Props exists inside the 
    // the constructor and this is the reason why props will be found inside the event handler.
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
}*/


// === COMMUNICATION ===
// Parent to child -> Props
// Child to parent -> Use of methods declared into the parent. The childs access to them using the props functionality.

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
    // It only can be accesed using class based component.
    // Fired in order to put the elements inside the DOM.
    componentDidMount() {
        console.log("ComponentDidMount!");
        try {
            const json = localStorage.getItem("options");
            // Convert strings into objects.
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
            console.log("Fetching Data!");
        } catch (e) {
            //Do nothing at all.
        }
    }

    // Fired after a component was modified.
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate!");
        // Verify that the length of the array has changed.
        if(prevState.options.length !== this.state.options.length) {
            // Convert this {key: value} into {"key": "value"}
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("Saving Data!");
        }
    }

    // Fired when the component goes away. (Delete components)
    componentWillUnmount() {
        console.log("ComponentWillUnmount!");
    }

    // This method will be useful to modify the options variable from others components.
    // When the options variable it's modified, the parent (this class) will modifiy the props
    // send to the childs and the childs will render again their elements into the browser.
    handleDeleteOptions() {
        this.setState(() => ({ options: []}))
        
        // Another solution with more lines.
        /*this.setState(() => {
            return {
                options: props.options
            };
        });*/
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum =  Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        alert(randomOption);
    }

    handleAddOption(option) {
        if(!option) {
            return "Enter valid value to add item!";
        } else if (this.state.options.indexOf(option) > -1) { //If the indexOf returns -1 the element is not in the array, otherwise it exists.
            return 'This option already exists!';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));

        if (!error) {
            e.target.elements.option.value = "";
        }
        
        // Another solution with more lines.
        /*this.setState((prevState) => {
            return {
                options: prevState.options.concat(option) 
            };
        });*/
    }

    render() {
        const subtitle = "The app that is going to decide for you my friend!";

        return (
            <div>
                <Header subtitle={subtitle}/>
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

// HEADER: Class Based Component
/*class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}*/

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

// ACTION: Class Based Component
/*class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}*/

// OPTION: Stateless Functional Component
//-onClick requires a reference to a function, so you need to pass it a function. . .
//-1. onClick={props.handleDeleteOption}  will not work because the handler needs the value of option
//-2. onClick={props.handleDeleteOption(props.optionText)} will not work because you are invoking the function, not assigning it.
//-3.The arrow function was created to solve the above two problems (a regular function would also have worked).

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

// OPTION: Class Based Component
/*class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        );
    }
}*/

// OPTIONS: Stateless Functional Component
// Key is a reserved word and can't be used as prop, so the Option component can't access to the value of key.
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

// OPTIONS: Class Based Component
/*class Options extends React.Component {
    render() {
        return (
            <div>
                <p>The number of currently options is: {this.props.options.length}</p>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ul>
                    {
                        this.props.options.map((option) => <Option  key={option} optionText={option}/>)
                    }
                </ul>
            </div>
        );
    }
}*/

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
        // Clears the text box in the HTML.
        e.target.elements.option.value = '';

        // ES6: We can write only the name of the variable if we are going to asign the variable to a propertie of the same name
        // So, the error instruction is the same => "error: error"

        this.setState(() => ({error}));

        // Another solution with more lines.
        /*this.setState(() => {
            return { error };
        });*/

        /*if(option) {
            // Method declared in the father function. 
            this.props.handleAddOption(option);
            // Clears the text box in the HTML.
            e.target.elements.option.value = '';
        }*/
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