import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getResultUserData from "./functions/resultApiUserData";
import getResultWeatherData from "./functions/resultApiWeatherData";
import User from "./components/User";
import Weather from "./components/Weather";

function App() {
    const data = useSelector(state => state.repos)
    const dispatch = useDispatch()

    useEffect( async () => {



        await dispatch(getResultUserData())
        alert("2")
        await dispatch(getResultWeatherData(data.itemsUser.location.city))

        alert("3")


        // dispatch(getResultUserData(()=>{
        //     alert("Hallo")
        //         console.log(data)
        //     console.log(data.itemsUser.location.city)
        //     dispatch(getResultWeatherData(data.itemsUser.location?.city))
        // }
        // ))
        // dispatch(getResultWeatherData(data.itemsUser.location?.city))


    }, [dispatch])


    // useEffect(() => {
    //     dispatch(getResultWeatherData("Polohy"))
    // }, [dispatch])

    return (

        <div>
            фвджафываыдвлфоажфдылвоа
            {data.isLoadedUser === true ? <User data={data.itemsUser}/> : ''}
            <br/>
            <br/>
            <br/>
            {data.isLoadedWeather === true ? <Weather data={data.itemsWeather}/> : ''}
            фывафывафываф
        </div>

    );
}


export default App;
