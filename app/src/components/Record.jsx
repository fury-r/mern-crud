import React  from "react";
import { Button } from "react-bootstrap";

const Record = ({ value, index, handleSelected, selected }) => {
  return (
    <div
      className="row"

    >
      <div
        className="item"
        style={{
          flex: 0.2,

          width: "20%",
        }}
      >
        <label>{value.name}</label>
      </div>
      <div
        className="item"
        style={{
          flex: 0.4,

          width: "40%",
        }}
      >
        <label>{value.email}</label>
      </div>
      <div
        className="item"
        style={{
          flex: 0.1,

          width: "10%",
        }}
      >
        <label>{value.age}</label>
      </div>
      <div
        className="item"
        style={{
          flex: 0.1,

          width: "10%",
        }}
      >
        <label>{value.gender}</label>
      </div>
      <div
        className="item"
        style={{
          flex: 0.15,

          justifyContent: "space-around",
          width: "17%",
        }}
      >
        <Button
          onClick={() => {
            handleSelected(index, 2);
          }}
          className="button"
          style={{
            flex: 0.4,
            backgroundColor: "#2486d0",
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            handleSelected(index, 3);
          }}
          className="button"
          style={{
            flex: 0.4,
            backgroundColor: "black",
          }}
        >
          Delete
        </Button>

        <Button
          style={{ background: index === selected ? "green" : "" }}
          onClick={() => {
            handleSelected(index, 4);
          }}
        ></Button>
      </div>
    </div>
  );
};
export default Record;
