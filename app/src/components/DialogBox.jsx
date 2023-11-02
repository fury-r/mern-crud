import axios from "../api/axios";
import {  useState } from "react";
import { Button, Modal, } from "react-bootstrap";
import UserForm from "./UserForm";

const DialogBox = ({ mode, setShow, show, value,handleDataChange }) => {
  const [status, setStatus] = useState(-1);
  const [data, setData] = useState({
    name: value?.name,
    email: value?.email,
    age: value?.age,
    gender: value?.gender,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmit = () => {
    setErrors({
      name: "",
      email: "",
    });
    if (mode === 1) {
      axios
        .post("/insert", {
          ...data,
        })
        .then((res) => {
          setStatus(1);
          handleDataChange()
        })
        .catch((err) => {
          if (err?.response?.data?.type) {
            setStatus(2);
          } else if (err?.response?.status === 422) {
            let message = err.response.data;
            console.log(message);
            Object.keys(message).map((value, key) => {
              setErrors({
                ...errors,
                [value]: message[value].message,
              });
            });
          }
        });
    } else {
      axios
        .post("/update", {
          _id: value._id,
          ...data,
        })
        .then((res) => {
          setStatus(1)
          handleDataChange()
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.data?.type) {
            setStatus(2);
          } else if (err?.response?.status === 422) {
            let message = err.response.data;
            console.log(message);
            Object.keys(message).map((value, key) => {
              console.log(value)
              setErrors({
                ...errors,
                [value]: message[value].message,
              });
            });
          }        
        });
    }
  };



  const handleDelete = () => {
    axios
      .delete("/delete?id="+value._id)
      .then((res) => {
        handleDataChange()
                setShow(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === 1 ? "Add User" : mode === 2 ? "Edit User" : "Delete User"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {mode === 3 ? (
            <div>
              <label>Are you sure you want to delete {data.name}?</label>
            </div>
          ) : (
              <UserForm data={data} errors={errors} onChange={onChange} />

          )}
           {status > 0 ? (
                <div>
                  <div
                  className="alert"
                    style={{
         
                      borderColor: status === 1 ? "#23aa32" : "#a57b17",
                      background: status === 1 ? "#e5f9e7" : "#fff8db",
                    }}
                  >
                    <b style={{ color: status === 1 ? "#23aa32" : "#a57b17" }}>
                      {status === 1 ? "Nice one" : "Woah!"}
                    </b>
                    <label
                      style={{ color: status === 1 ? "#23aa32" : "#a57b17" }}
                    >
                      {status === 1
                        ? "Successfully "+(mode===1?"added":"Updated")
                        : "The email is already exist"}
                    </label>
                  </div>
                </div>
              ) : (
                <></>
              )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {mode === 3 ? (
          <div
          className="flex-row-end"
     
          >
            <Button
              onClick={handleDelete}
              className='button'
              style={{
         
                backgroundColor: "#db2828",
              }}
            >
              Yes
            </Button>

            <Button
              className='button'
                onClick={()=>setShow(false)}
              style={{
                backgroundColor: "black",
          
                marginLeft: "10px",
              }}
            >
              No
            </Button>
          </div>
        ) : (
          <Button
          className='button'

            style={{
              backgroundColor: mode === 1 ? "#0ea432" : "#0d71bb",
            }}
            onClick={onSubmit}
          >
            {mode === 1 ? "Add" : "Save"}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
export default DialogBox;
