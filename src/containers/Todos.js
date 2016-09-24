import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import TodoList from "../components/TodoList";
// import our addTodo action creator
import { addTodo } from "../actions/todos";

@connect(
    (state) => ({todos: state.todos}),
    // bind our action creator to the dispatch method so we can pass it around
    // without worrying about how to dispatch the action to our Redux store
    (dispatch) => bindActionCreators({addTodo}, dispatch)
)
export default class Todos extends Component {
	static gsBeforeRoute({dispatch}) {
		console.log("gsBeforeRoute Called");
	  }
	
	static fetchData ({dispatch}) { console.log("fetchData Called"); }	

    render () {
        // Pass the bound addTodo action creator to TodoList
        return (
            <TodoList todos={this.props.todos} addTodo={this.props.addTodo} />
        );
    }
}