// Terminal command:
// babel src/playground/user-example.js --out-file=public/scripts/app.js --presets=env,react --watch

// COURSE CHALLENGE TASK #1, #2, #3
const user = {
    name: 'José Pliego',
    age: 25, 
    location: 'Mexico City'
};

//1st Conditional Rendering: Ternary Operator 
//2nd Conditional Rendering: Logical && Operator (If true, returns the 2nd value which is the <p> element)
//3rd Conditional Rendering: Function Validation with IF statements
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p><strong>Age: </strong>{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

function getLocation(location) {
    if(location) {
        return <p><strong>Location: </strong>{location}</p>
    }
}

const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);