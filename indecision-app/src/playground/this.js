// Outside of any function in a global execution context, THIS refers to the global context (window object).

// === INSTANCES OF AN OBJECT ===

// NEW operator creates an instance of an object. Context of the function will be set to the created instance of an object. 

// ==== REGULAR FUNCTIONS ====

//THIS refers to the object that the function is executing in.
//When a function is called as a method of an object, THIS is set to the object the method is called on.

// ==== ARROW FUNCTIONS ====

// When we use arrow functions, this retains the value of the enclosing lexical context.
// I.E THIS retains the value of the enclosing lexical context's.

// ==== EVENT HANDLERS ====
// The context in case event handlers refers to the element that received the event.