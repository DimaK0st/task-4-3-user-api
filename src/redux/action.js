import {ADD_DATA, INIT, RESET} from './actionType'


export function actionInfo(data){
    console.log("-------------------------------------")
    console.log(data)
    return{
        type:ADD_DATA,
        data:data,
    }
}
export function resetData(){
    return{
        type:RESET,
    }
}
