import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import axios from "axios";
import {api} from "./api/base.js";
import EmployeeContext from "./context/EmployeeContext.jsx";
import AllEmployees from "./components/AllEmployees.jsx";
import AddEmployeeCard from "./components/AddEmployeeCard.jsx";
import EditEmployeeCard from "./components/EditEmployeeCard.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState({})

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await api.get('employee/all');
        // console.log(res.data)
        setEmployees(res.data.employees);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAllTasks();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  //
  // console.log("EMPLOYEE : ",employees)

  return (
    <EmployeeContext.Provider value={{ isOpen, setIsOpen, editOpen, setEditOpen, employees , setEmployees, selectedEmployees , setSelectedEmployees}}>
      <Navbar />
      {isOpen && (
          <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={handleClose}
            ></div>
            {/*<div className="fixed inset-0 backdrop-blur-sm"></div>*/}
            {/* Modal */}
            <div className="fixed inset-0 z-20 flex justify-center items-center">
              <AddEmployeeCard />
            </div>
          </>
      )}

      {editOpen && (
          <>
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <div className="absolute z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <EditEmployeeCard id={selectedEmployees._id} postId={selectedEmployees.postId} name={selectedEmployees.name} email={selectedEmployees.email} body={selectedEmployees.body}/>
            </div>
          </>
      )

      }
      <AllEmployees />
      <div className="fixed right-24 bottom-16 z-50">
        <button
            onClick={handleOpen}
            className="bg-black text-white p-3 shadow-2xl rounded-xl border border-b-gray-100 font-bold text-md hover:bg-gray-800"
        >
          Add Employee
        </button>
      </div>
    </EmployeeContext.Provider>
  )
}

export default App
