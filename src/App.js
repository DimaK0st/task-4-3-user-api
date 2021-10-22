import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const data= useSelector(state=>state)
  const dispatch = useDispatch()



  return (

      <div>
        Hi man!!!
      </div>

      );
}

export default App;
