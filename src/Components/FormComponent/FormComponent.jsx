import React, { useState } from "react";
import "./FormComponent.css";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
function FormComponent(props) {
  const [employeeDetails, setEmployeeDetails] = useState({
    empId: "",
    empName: "",
    empDOJ: "",
    empProject: "",
    empPhoto: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(employeeDetails)
    props.setEmployeeData((prev)=>{
        return [...prev, employeeDetails]
    })
    setEmployeeDetails({
        empId: "",
        empName: "",
        empDOJ: "",
        empProject: "",
        empPhoto: undefined,
    })
  };
  return (
    <div>
      <form className="employee-form" onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-basic"
          label="Id"
          variant="outlined"
          onChange={(e) => {
            setEmployeeDetails((prev) => {
              return {
                ...prev,
                empId: e.target.value,
              };
            });
          }}
          value={employeeDetails.empId}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => {
            setEmployeeDetails((prev) => {
              return {
                ...prev,
                empName: e.target.value,
              };
            });
          }}
          value={employeeDetails.empName}
        />
        <TextField
          id="outlined-basic"
          label="D.O.J"
          variant="outlined"
          onChange={(e) => {
            setEmployeeDetails((prev) => {
              return {
                ...prev,
                empDOJ: e.target.value,
              };
            });
          }}
          value={employeeDetails.empDOJ}
        />
        <TextField
          id="outlined-basic"
          label="Project"
          variant="outlined"
          onChange={(e) => {
            setEmployeeDetails((prev) => {
              return {
                ...prev,
                empProject: e.target.value,
              };
            });
          }}
          value={employeeDetails.empProject}
        />
        <label className="drawer__form__button drawer__form__image__input">
          Employee Photo
          <Input type="file" onChange={(e) => {
            setEmployeeDetails((prev) => {
              return {
                ...prev,
                empPhoto: URL.createObjectURL(e.target.files[0]),
              };
            });

          }}
         files={[employeeDetails.empPhoto]}
          />
        </label>
        <div className="drawer__buttons__container">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.handleDrawerToggle();
            }}
            className="drawer__form__button"
          >
            Cancel
          </button>
          <button type="submit" className="drawer__form__button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
