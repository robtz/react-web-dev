// Export properties to another file.

// Entry -> Which is the file that have to use as entry point.
// Output > 1st: Path where the file is going to live. The "path.join" will create a new route depending on the input of the function. 
//          2nd: Filename of the generated file by webpack.
// The output file is going to live inside the public folder in order to be used by the web browser.

// Loader -> Specify that we are going to use Babel using specific rules.
// Test -> Specify the files that will be translated. In this case applies all the js files.
// Exclude -> Specify the files that will not be translated. In this case all the files contained into node_modules.

// Devtool -> Allows to the user check which is the original line where a bug is present when an error is reported. (Original Source Map)
// DevServer -> Specifies to the server the route where are the files that have to use in order to display the web page. 

const path = require("path");

module.exports = {
    entry: "./src/app.js", 
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};