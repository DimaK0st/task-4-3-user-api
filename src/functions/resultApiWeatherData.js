import axios from "axios";
import {actionAddInfoWeather} from "../redux/action";

export default function getResultWeatherData(city, callback)
{

    const key="358a2e2d88715706e9508c82b643fc63";

    return async (dispatch) => {
        alert("1234567890")
        console.log("getResultWeatherData")
        const result = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+key)
        console.log("result",result)
        dispatch(actionAddInfoWeather(result))
    }
}
