import {Component} from 'react';
import EmployeeService from '../services/EmployeeService';


class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //Step 2 for just using one component
            id: this.props.match.params.id,
            firstName:"",
            lastName: "",
            emailId: ""
         }
         this.changeFirstNameHandler = this.changeFirstNameHandler.bind();
         this.changeLastNameHandler = this.changeLastNameHandler.bind();
         this.changeEmailIdHandler = this.changeEmailIdHandler.bind();
         this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind();
    }

    // Step 3
    componentDidMount(){
        console.log(this.state.id);

        // step 4
        // eslint-disable-next-line eqeqeq
        if(this.state.id === "_add"){
            console.log("No mete datos");

            return;
        }
        else{
            console.log("llena los datos duros");
            EmployeeService.getEmployeeById(this.state.id).then(res => {
                let employee = res.data;
                this.setState({firstName:employee.firstName, 
                    lastName:employee.lastName,
                    emailId:employee.emailId
                })
            })
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId}
        console.log("employee ", JSON.stringify(employee));

        
        // step 5
        if(this.state.id === "_add"){
            console.log("Este es de add employee");

            EmployeeService.createEmployee(employee).then((res) => {
                this.props.history.push("/employees");
            });
        }
        else{
            console.log("Este es de update Employee");

            EmployeeService.updateEmployee(employee ,this.state.id).then(res => {
                this.props.history.push("/employees");
            })
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value})
    }

    cancel(){
        this.props.history.push("/employees")
    }

    render() { 
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> {this.state.id === "_add" ? "Add employee" : "Edit Employee "} </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}
                                        ></input>
                                        <label> Last Name </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}
                                        ></input>   
                                        <label> Email Address </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler}
                                        ></input>                                      
                                    </div> 

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default CreateEmployeeComponent;