// Terminal command: 
// babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

// ==== STATE ====
// The steps in order to change a state are 1) Setup default state object, 2) Component is rendered with default values (Automatically)
// 3) Tha state change based on an event, 4) Component is re-rendered using the new state values (Automatically).

// Implementation with Components, Props and States.
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        //STEP 1: The default state has to be inside the constructor method.
        this.state = {
            count: 0
        };
    }

    // Fired in order to put the elements inside the DOM.
    componentDidMount() {
        const stringNumber = localStorage.getItem("number");

        if(stringNumber !== undefined) {
             // Convert strings into objects.
            const intNumber = parseInt(stringNumber, 10);
            this.setState(() => ({count: intNumber}));
            console.log("Fetching Data!");
        }
    }

    // Fired after a component was modified.
    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem("number", this.state.count);
            console.log("Saving Data!");
        }
    }

    //STEP 3: Change of the event. We only have to modify the properties of the state that have to be changed. 
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    //STEP 2: Render with default value.
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleMinusOne}>- 1</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleAddOne}>+ 1</button>
            </div>
        );
    }
}

// In order to pass a value to count, the instruction is the next one:
// ReactDOM.render(<Counter count={5}/>, document.getElementById("app"));

ReactDOM.render(<Counter/>, document.getElementById("app"));

/*
// With JSX, we have to use className instead of class as attribute.
// Some attributes of HTML have to be written differently in JSX because this words are reserved words in JS.
// The event onClick calls the respective function declared inside the {}.
let count = 0;

const plusOne = () => {
    count++;
    renderCountApp();
};

const reset = () => {
    count = 0;
    renderCountApp();
};

const minusOne = () => {
    count--;
    renderCountApp();
};

// Element where the template will be rendered.
const appRoot = document.getElementById("app");

// The template and the render method is inside of the renderCountApp method because the function will be called 
// when some button be pressed. This will cause that the elements be rendered again in the browser with the new value of count.
//
// React is super efficient because uses some virtual DOM algorithms in JS to determine the minimal number of changes that need to be made
// in order to correctly render the new application.
const renderCountApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={plusOne}>+1</button>
        </div>
    );

    // Instruction to render the template in the web browser.
    ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
*/

