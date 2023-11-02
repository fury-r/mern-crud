import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import Header from "./Header";
import DialogBox from "./DialogBox";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { assign } from "../features/operations/counterSlice";
import Record from "./Record";



const TableUser = () => {
  console.log(useSelector((state) => state));
  const data = useSelector((state) => state.data.value);
  const [mode, setMode] = useState(1);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    await axios
      .get("/")
      .then((res) => {
        console.log(res.data);
        if (res.data.data.length > 0) {
          dispatch(assign(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelected = (key, mode) => {
    console.log(mode)
    if (mode === 4) {
      console.log(selected,key)
      if (selected === key) {
        setSelected(-1);
      } else {
        setSelected(key);

      }
    } else {
      setSelected(key);
      setMode(mode);
      setShow(true);
    }
  };

  const handleDataChange = () => {

    getUserInformation();
  };



  const moveUp=()=>{
    let tempData = [...data];
    let move = selected;
    let moveTo = selected - 1;
    if (moveTo <0) {
      moveTo = data.length-1
    }
    let temp = data[move];
    tempData[move] = tempData[moveTo];
    tempData[moveTo] = temp;
    setSelected(moveTo);
    dispatch(assign(tempData));

  }
  const moveDown=()=>{
    let tempData = [...data];
    let move = selected;
    let moveTo = selected + 1;
    if (moveTo === data.length) {
      moveTo = 0;
    }
    let temp = data[move];
    tempData[move] = tempData[moveTo];
    tempData[moveTo] = temp;
    setSelected(moveTo);
    dispatch(assign(tempData));

  }
  const handleSort = (e) => {

    const move = e.target.id;
    console.log(move);

    if (selected >= 0) {
      if (move === "up") {
       moveUp()
      } else {
        moveDown()
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {show ? (
        <DialogBox
          value={selected === -1 ? {} : data[selected]}
          setShow={setShow}
          show={show}
          selected={selected}
          handleDataChange={handleDataChange}
          mode={mode}
        />
      ) : (
        <></>
      )}

      <div>
        <div
          className="flex-row-between"
        >
          <Button
            onClick={() => {
              handleSelected(-1, 1);
            }}
            className="button"
            style={{
              backgroundColor: "#21ba45",
            }}
          >
            Add new
          </Button>
          <div>
            <Button
              id="up"
              onClick={handleSort}
              className="button"
              style={{
                backgroundColor: "black",
              }}
            >
              Up
            </Button>
            <Button
              onClick={handleSort}
              id="down"
              className="button"
              style={{
                backgroundColor: "black",
              }}
            >
              Down
            </Button>
          </div>
        </div>
        <div
        className="table"
 
        >
          <Header />

          <div style={{ overflow: "scroll",height:'88vh',marginBottom:'20px' }}>
            {data.length > 0 ? (
              data.map((value, key) => (
                <Record
                  value={value}
                  handleSelected={handleSelected}
                  key={key}
                  selected={selected}
                  index={key}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableUser;
