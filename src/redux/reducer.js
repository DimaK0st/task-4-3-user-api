import {ADD_DATA_USER, ADD_DATA_WEATHER, INIT, RESET} from "./actionType";

const defaultState = {

    error: null,
    isLoaded: false,
    itemsUser: [],
    itemsWeather: [],

}

export default function reducer(state = defaultState, action) {
    alert(action.type)
    switch(action.type) {


        case ADD_DATA_USER:
            return { itemsUser: action.data.results[0] };

        case ADD_DATA_WEATHER:
            return { itemsWeather: action.data.results[0] };

        default:
            return state;
    }
}

