import React, { useState, useContext } from "react";
import "./EmpCard.css";
import {
  deleteTaskFromList,
  editTaskInList,
} from "../../Services/employeeSevices";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "../UI/Button";
import { EmpContext } from "../../App";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
function EmpCard(props) {
  const employee = useContext(EmpContext);
  const { employeeData, setEmployeeData } = employee;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "rgb(196, 223, 223)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };

  const { empId, empName, empDOJ, empProject, empPhoto } = props.item;

  const [modalOpen, setModalOpen] = useState(false);
  const [inputErrorMessage, setInputErroMessage] = useState("");
  const [descErrorMessage, setDescErrorMessage] = useState("");
  const [updatedTaskName, setUpdatedTaskName] = useState("");
  const [updatedTaskDesc, setUpdatedTaskDesc] = useState("");
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // Function to delete task on double click
  const taskDeleteHandler = (id) => {
    console.log("Deleted")
    deleteTaskFromList(id, employeeData, setEmployeeData);
  };

  const checkName = () => {
    if (updatedTaskName.trim() === "") {
      setInputErroMessage("Please Enter a name");
      return false;
    } else {
      return true;
    }
  };

  const checkDesc = () => {
    if (updatedTaskDesc.trim() === "") {
      setDescErrorMessage("Please Enter a Description");
      return false;
    } else {
      return true;
    }
  };
  const updateHandler = () => {
    let flag = true;
    flag = checkName() && flag;
    flag = checkDesc() && flag;
    if (flag) {
      let updatedData = {
        taskName: updatedTaskName,
        taskDesc: updatedTaskDesc,
      };
      editTaskInList(
        props.task.taskId,
        updatedData,
        props.employeeData,
        props.setEmployeeData
      );
    }
  };
  return (
    <>
      <div
        className="taskCard__container"
      >
        <img src={empPhoto} alt="hello" className="empCard__emp_photo" />
        <div className="empCard__footer">
          <h3 className="empCard__emp_name">Name:{empName}</h3>
          <div className="empCard__emp_doj">D.O.J:{empDOJ}</div>
          <div className="empCard__emp_project">Project:{empProject}</div>
        </div>
        <div className="empCard__actions__container">
          <Button>
            <BsPencilSquare />
          </Button>
          <Button
            onClick={() => {
                deleteTaskFromList(empId, employeeData, setEmployeeData);;
            }}
          >
            <AiFillDelete />
          </Button>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            placeholder="Enter name of the task"
            className="editform__name_input"
            onChange={(e) => {
              setUpdatedTaskName(e.target.value);
            }}
            value={updatedTaskName}
          />
          <div className="editform__name_error inputError">
            {inputErrorMessage}
          </div>
          <textarea
            placeholder="Enter the description of Task"
            id=""
            cols="30"
            rows="10"
            className="editform__modal_text_area"
            onChange={(e) => {
              setUpdatedTaskDesc(e.target.value);
            }}
            value={updatedTaskDesc}
          ></textarea>
          <div className="editform__desc_error inputError">
            {descErrorMessage}
          </div>
          <div>
            <Button
              onClick={() => {
                handleModalClose();
                console.log("button clicked!!!");
              }}
            >
              Cancel
            </Button>
            <Button onClick={updateHandler}>Add Task</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default EmpCard;
