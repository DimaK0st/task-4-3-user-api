import {ADD_DATA_USER, ADD_DATA_WEATHER, INIT, RESET} from './actionType'


export function actionAddInfoUser(data){
    console.log(data)
    return{
        type:ADD_DATA_USER,
        data:data,
    }
}

export function actionAddInfoWeather(data){
    console.log(data)
    return{
        type:ADD_DATA_WEATHER,
        data:data,
    }
}
