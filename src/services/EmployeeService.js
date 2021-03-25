import axios from "axios"


const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    //Post interaction with the database in java
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    //Used to get the User to populate the update view 
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    }

    //this is to do the update of the employee
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee, {
            headers: { "Access-Control-Allow-Origin": "*"}
        });
    }



}

export default new EmployeeService();