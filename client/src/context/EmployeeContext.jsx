import React, {createContext} from 'react';

const EmployeeContext = createContext({
    /*
        Creating context for employee data
    */
    isOpen: false,
    setIsOpen: () => {},
    editOpen: false,
    setEditOpen: () => {},
    employees: [],
    setEmployees: () => {},
    selectedEmployees: null,
    setSelectedEmployees: () => {}
})

export default EmployeeContext;