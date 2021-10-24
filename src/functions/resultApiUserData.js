import axios from "axios";
import {actionAddInfoUser} from "../redux/action";

export default function getResultUserData()
{
    return async (dispatch) => {
        const result = await axios.get('https://randomuser.me/api/')
        dispatch(actionAddInfoUser(result.data))
    }
}
