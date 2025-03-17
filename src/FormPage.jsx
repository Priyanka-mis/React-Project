import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: age
    };

    // Save in sessionStorage to access in next page
    sessionStorage.setItem("formData", JSON.stringify(formData));

    navigate("/display");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} required />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} required />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;