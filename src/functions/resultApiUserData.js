import axios from "axios";
import {actionAddInfoUser} from "../redux/action";
import getResultWeatherData from "./resultApiWeatherData";

export default function getResultUserData(callBack)
{
    return async (dispatch) => {
        alert("getResultUserData")
        const result = await axios.get('https://randomuser.me/api/')
        dispatch(actionAddInfoUser(result.data))
        alert("getResultUserData --------------")
        if (typeof callBack == 'function') callBack()
    }
}
