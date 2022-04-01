import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRoutes from "./Components/MainRoutes";
import { getUser } from "./Hooks/useAuth";

function App() {

  const dispatch = useDispatch();
  useEffect(() => 
  {
    if(getUser(localStorage.getItem("token"))){
      dispatch(getUser(localStorage.getItem("token")))
    }
  }, [])

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
