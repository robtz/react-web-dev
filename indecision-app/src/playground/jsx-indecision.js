// Terminal command:
// babel src/playground/jsx-indecision.js --out-file=public/scripts/app.js --presets=env,react --watch 

// JSX - JavaScript XML
// JSX ignores null, boolean & undefined. This elements aren't rendered into the browser.
const app = {
    title: 'Indecision App',
    subtitle: 'The app that is going to decide for you!',
    options: []
};

// Element where the template will be rendered.
const appRoot = document.getElementById("app");

// Saves the option submitted in the form.
const onFormSubmit = (e) => {
    // Avoid the refresh of the browser.
    e.preventDefault();

    // 'e.target' obtains the form object.
    const option = e.target.elements.option.value;

    if(option) {
        // Add the option to the array.
        app.options.push(option);
        //Clears the text box in the HTML.
        e.target.elements.option.value = '';
    }

    renderIndecisionApp();
};

// Choose one option of the option's list.
const chooseOption = () => {
    //We have to multiply the random number by the number of viable options that we have.
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectOption = app.options[randomNum];
    alert( selectOption);
}

// Delete the options stored in the array.
const removeOptions = () => {
    app.options = [];
    renderIndecisionApp();
}

// Draws the elements into the web browser.
const renderIndecisionApp = () => {

    //It's necessary to put a key to every item in the list.
    const listOptions = app.options.map((option) => {
        return <li key={option}>{option}</li>
    });

    // Template with the HTML code.
    // It's necessary to have one single root element. That's the reason why all the elements are inside a <div> tag.
    // In the part of onSubmit, the onFormSubmit doensn't have to be called only declared, because the answer is undefined. 
    // So, it's correct write onFormSubmit and not onFormSubmit()

    // Optional answer instead {listOptions}:
    // {app.options.map((option) => <li key={option}>{option}</li>)}
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={chooseOption}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {listOptions}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();
