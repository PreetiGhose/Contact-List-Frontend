import React, { useState } from "react";

const InputContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const finaldata = {
      name: name,
      phone: phone,
      email: email,
    };
    setName("");
    setEmail("");
    setPhone("");
    console.log(finaldata);
    const result = await fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify(finaldata),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const resultinJson = await result.json();
    console.log(resultinJson);
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleClick}>
        <label className="col-sm-2 col-form-label">Name</label>
        <input
          class="form-control col-sm-10"
          placeholder="Name"
          onChange={handleName}
          value={name}
        ></input>
        <br></br>
        <label className="col-sm-2 col-form-label">Phone Number</label>
        <input
          class="form-control col-sm-10"
          placeholder="Phone Number"
          onChange={handlePhone}
          value={phone}
        ></input>
        <br></br>

        <label className="col-sm-2 col-form-label">Email Address</label>
        <input
          class="form-control col-sm-10"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
        ></input>
        <br></br>
        <button onClick={handleClick} className="btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
};
export default InputContact;
