import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import GraphPage from "./Components/GraphPage/GraphPage";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import CardPage from "./Components/CardPage/CardPage";
import { Routes, Route } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { useState, createContext } from "react";
export const EmpContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: 2,
    email: "asutoshDora@gmail.com",
    password: "password2",
    img: "",
  });
  const [employeeData, setEmployeeData] = useState([]);
  // Function to delete tasks from existing list
  const deleteTaskFromList = (taskId) => {
    console.log("Deleted a emp");
    const updatedList = employeeData.filter((item) => item.empId !== taskId);
    setEmployeeData(updatedList);
  };

  // Function to edit tasks in existing list
  const editTaskInList = (taskId, updatedTask) => {
    const updatedList = employeeData.map((item) => {
      if (item.empId === taskId) {
        return updatedTask;
      }
      return item;
    });
    setEmployeeData(updatedList);
  };
  return (
    <div className="App">
      {/* <>
        <EmpContext.Provider
          value={{
            employeeData,
            setEmployeeData,
            deleteTaskFromList,
            editTaskInList,
          }}
        >
          <NavBar
            currentUser={currentUser}
            setIsLoggedIn={setIsLoggedIn}
            setEmployeeData={setEmployeeData}
          />
          <Routes>
            <Route path="/" element={<HomePage currentUser={currentUser} />} />
            <Route path="graph" element={<GraphPage />} />    
            <Route path="cards" element={<CardPage />} />
          </Routes>
        </EmpContext.Provider>
      </> */}

      
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>
      ) : (
        <>
          <NavBar currentUser={currentUser} setIsLoggedIn={setIsLoggedIn} setEmployeeData={setEmployeeData}/>
          <EmpContext.Provider
          value={{
            employeeData,
            setEmployeeData,
            deleteTaskFromList,
            editTaskInList,
          }}
        >
          <NavBar
            currentUser={currentUser}
            setIsLoggedIn={setIsLoggedIn}
            setEmployeeData={setEmployeeData}
          />
          <Routes>
            <Route path="/" element={<HomePage currentUser={currentUser} />} />
            <Route path="graph" element={<GraphPage />} />
            <Route path="cards" element={<CardPage />} />
          </Routes>
        </EmpContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
