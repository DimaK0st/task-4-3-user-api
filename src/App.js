import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getResult from "./functions/resultApiData";

function App() {
  const data= useSelector(state=>state.repos)
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getResult())
    }, [dispatch])

  return (

      <div>
          {proverka(data.items.picture , "large")}
          <br/>
          {proverka(data.items.name , "title")+" "+proverka(data.items.name , "first")+" "+proverka(data.items.name , "last")}
      </div>

      );
}


function proverka(object, info){

    return object !== undefined ? object[`${info}`] : ''


}


export default App;
