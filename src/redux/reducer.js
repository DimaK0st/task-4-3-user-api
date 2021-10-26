import {ADD_DATA_USER, ADD_DATA_WEATHER, INIT, RESET} from "./actionType";

const defaultState = {

    error: null,
    isLoadedUser: false,
    isLoadedWeather: false,
    itemsWeather: [],
    itemsUser: [],

}

export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case ADD_DATA_USER:
            return {
                ...state,
                itemsUser: action.data.results[0],
                isLoadedUser: true
            };

        case ADD_DATA_WEATHER:
            return {
                ...state,
                itemsWeather: action.data.data,
                isLoadedWeather: true
            };

        default:
            return state;
    }
}

