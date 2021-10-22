import {INIT} from "./actionType";

const defaultState = {

    error: null,
    isLoaded: false,
    items: [],

}

export default function reducer(state = defaultState, action) {
    switch(action.type) {

        case INIT:
            return { value: action.value_1 };

        default:
            return state;
    }
}

