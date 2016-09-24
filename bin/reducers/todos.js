/* @flow */
import { ADD_TODO } from "../actions/todos";

import update from "react-addons-update";

//const INITIAL_STATE = {todos : []};

const INITIAL_STATE = {
		todos : []
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return update(state, {$merge: {todos: action.value.data}});
        default:
            return state;
    }
};
