import React, { Component, PropTypes } from "react";

export default class AddTodo extends Component {
	
	static gsBeforeRoute({dispatch}) {
		console.log("gsBeforeRoute Called");
	  }
	
	static fetchData ({dispatch}) { console.log("fetchData Called"); }	
	
    render () {
        return (
            <div>
                <form onSubmit={this.didSubmit}>
                    <input type="text" ref={(input) => this.input = input} />
                </form>
            </div>
        );
    }

    didSubmit = (e) => {
        e.preventDefault();
        const newItem = this.input.value;
        this.input.value = "";
        this.props.addTodo(newItem);
    }
}