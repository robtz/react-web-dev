// Terminal command: 
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

// CHALLENGE =====> MY SOLUTION
// Step 01: 
// Create the class BuildItVisible.
class BuildItVisible extends React.Component {

    // Step 02: 
    // Pass the PROPS to the constructor. 
    // This will allow to bind the events with the context where the props exists.
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // Step 03:
        // Create the default state.
        this.state = {
            visibility: false,
            bodyText: "",
            btnText: "Show details"
        }
    }

    // Step 03:
    // Create the new state where the visibility changes.
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility),
                bodyText: prevState.visibility ? "" : "Hey! There are some details now you can see!",
                btnText: prevState.visibility ? "Shows details" : "Hide details" 
            };
        }); 
    }

    // Step 04: 
    // Render the template into the browser.
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.btnText}</button>
                <p>{this.state.bodyText}</p>
            </div>
        );
    }

}

// Step 05:
// Links the component with the part of the HTML where the template will be shown.
ReactDOM.render(<BuildItVisible />, document.getElementById("app"));

/*
CHALLENGE =====> COURSE SOLUTION 

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
*/

/*
=====> OLD IMPLEMENTATION 

// Flags to show/hide details.
let visibleDetails = false;
let visibleBtnText = "Show details";
let visibleBodyText = "Hey! There are some details now you can see!";

// Element where the template will be rendered.
const appRoot = document.getElementById("app");

const makeVisible = () => {
    if(visibleDetails) {
        visibleDetails = false;
        visibleBtnText = "Show details";
    } else {
        visibleDetails = true;
        visibleBtnText = "Hide details";
    }

    //Re-render the app.
    renderVisibleToggleApp();
};

const renderVisibleToggleApp = () => {
    // Template.
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={makeVisible}>{visibleBtnText}</button>
            <p>{visibleDetails ? visibleBodyText : ''}</p>
        </div>
    );

    // Instruction to render the template in the web browser.
    ReactDOM.render(template, appRoot);
};

// First render of the app.
renderVisibleToggleApp();
*/