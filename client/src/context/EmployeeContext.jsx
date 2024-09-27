import React, {createContext} from 'react';

const EmployeeContext = createContext({
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