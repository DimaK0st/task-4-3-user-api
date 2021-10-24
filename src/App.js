import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getResultUserData from "./functions/resultApiUserData";
import getResultWeatherData from "./functions/resultApiWeatherData";

function App() {
  const data= useSelector(state=>state.repos)
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getResultUserData())
    }, [dispatch])


    // useEffect(() => {
    //     dispatch(getResultWeatherData("Polohy"))
    // }, [dispatch])

  return (

      <div>
          {proverka(data.itemsUser.picture , "large")}
          <br/>
          {proverka(data.itemsUser.name , "title")+" "+proverka(data.items.name , "first")+" "+proverka(data.items.name , "last")}
      </div>

      );
}


function proverka(object, info){

    return object !== undefined ? object[`${info}`] : ''


}


export default App;
