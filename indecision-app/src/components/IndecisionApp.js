import React from "react";

import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: randomOption
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item!";
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };


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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}