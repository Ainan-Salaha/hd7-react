import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addStudent, editStudent } from "./StdSlice";

const EditStudent = () => {
  const navigate = useNavigate();
  const editData = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Student);

  const [state, setState] = useState(data.stdInfo);

  useEffect(() => {
    if (editData.state !== null) {
      setState({
        name: editData.state.details.name,
        age: editData.state.details.age,
        course: editData.state.details.course,
        batch: editData.state.details.batch
      });
    }
  }, [editData]);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (editData.state === null) {
      dispatch(addStudent({ state }));
      navigate("/student");
      alert("New student is been added")
    } else {
      let index = editData.state.id;
      dispatch(editStudent({ state, index }));
      navigate("/student");
      alert('Details Updated')
    }
  };

  return (
    <>
    <h1 id='name'>Student's Details</h1>
      <div className="foam">
        <center>
        <input
          type="text"
          className="inputbox ib1"
          placeholder="Enter name"
          name="name"
          value={state.name}
          onChange={changeHandler}
        />
        <input
          type="number"
          className="inputbox ib1"
          placeholder="Enter age"
          name="age"
          value={state.age}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter course"
          className="inputbox ib1"
          name="course"
          value={state.course}
          onChange={changeHandler}
        />
        <input
          type="text"
          className="inputbox ib1"
          placeholder="Enter batch"
          name="batch"
          value={state.batch}
          onChange={changeHandler}
        />
        <br />
        <br />
        <br />
        <br />
        
        <Link to="/student" id="link">
          <button className="btn_cancel">Cancel</button>
        </Link>

        <button onClick={submit} className='btn_submit'>
          {editData.state === null ? "Submit" : "Update"}
        </button>
        </center>
      </div>
    </>
  );
};

export default EditStudent;
