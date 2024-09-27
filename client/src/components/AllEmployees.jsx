import React, {useContext} from 'react';
import EmployeeContext from "../context/EmployeeContext.jsx";
import EmployeeCard from "./EmployeeCard.jsx";

const AllEmployees = () => {
    const { employees } = useContext(EmployeeContext)
    // console.log(employees)
    return (
        <>
            <h1 className="text-center font-bold text-2xl mt-4">All Employees</h1>
            <div className="mx-auto mt-8 max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {employees && employees.map((employee, index) => (
                        <EmployeeCard
                            key={employee._id}  // Add key prop for optimal performance
                            id={employee._id}
                            postId={employee.postId}
                            name={employee.name}
                            email={employee.email}
                            body={employee.body}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllEmployees;