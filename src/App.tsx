import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthContext from "./state-management/contexts/authContext";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import taskReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, userDispatch] = useReducer(authReducer, "");

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch: userDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
