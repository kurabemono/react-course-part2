import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import AuthProvider from "./state-management/reducers/AuthProvider";
import taskReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
