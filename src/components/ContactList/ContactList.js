import { useEffect, useState } from "react";
import "./ContactList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    const result = await fetch("http://localhost:3001/", {
      method: "GET",
    });
    const jsonResult = await result.json();
    setContacts(jsonResult.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (e) => {
    const data = e.target.value;
    const value = { id: data };

    const result = await fetch("http://localhost:3001/delete", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const resultinJson = await result.json();
    console.log(resultinJson);

    fetchData();
  };

  // console.log(contacts);
  return (
    <div>
      {contacts.map((contat) => {
        return (
          <div class="card w-50 container-fluid rounded-lg">
            <div class="card-body ">
              <h2 class="card-title">{contat.name}</h2>
              <h5 class="card-text">Phone: {contat.phone}</h5>
              <h5 class="card-text">Email: {contat.email}</h5>
              <button
                onClick={handleDelete}
                value={contat._id}
                class="btn btn-primary"
              >
                Delete
              </button>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
export default ContactList;
