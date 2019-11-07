import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility.js'

const initialState = {
    counter: 5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, { counter: state.counter + action.val });
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter + action.val });
        case actionTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val });
        case actionTypes.SUBTRACT:
            return updateObject(state, { counter: state.counter + action.val });
        default:
            return state;

    }
}

export default reducer;