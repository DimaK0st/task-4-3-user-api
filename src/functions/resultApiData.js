import axios from "axios";
import {actionInfo, resetData} from "../redux/action";

export default function getResult()
{
    return async (dispatch) => {
        const result = await axios.get('https://randomuser.me/api/')
        dispatch(actionInfo(result.data))
    }
}
