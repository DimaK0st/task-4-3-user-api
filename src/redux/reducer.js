import {ADD_DATA, INIT, RESET} from "./actionType";

const defaultState = {

    error: null,
    isLoaded: false,
    items: [],

}

export default function reducer(state = defaultState, action) {
    switch(action.type) {

        case INIT:
            return { value: action.value_1 };


        case ADD_DATA:
            return { items: action.data.results[0] };

        case RESET:
            return { items: null };

        default:
            return state;
    }
}

