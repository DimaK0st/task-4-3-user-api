import axios from "axios";
import {actionAddInfoWeather} from "../redux/action";

export default function getResultWeatherData(city)
{

    const key="358a2e2d88715706e9508c82b643fc63";

    return async (dispatch) => {
        const result = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+key)
        dispatch(actionAddInfoWeather(result.data))
    }
}
