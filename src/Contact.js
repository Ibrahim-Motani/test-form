import React, { useState } from "react";

function Contact() {
  const [type, setType] = useState("");

  const [contactDetails, setContactDetails] = useState([
    { id: new Date().toString(), label: "Primary", value: "" },
  ]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(contactDetails);
  };

  const addField = () => {
    const newContactDetails = [
      ...contactDetails,
      { id: new Date().toString(), label: type, value: "" },
    ];
    setContactDetails(newContactDetails);
  };

  const handleChange = (id, event) => {
    const newContactDetails = contactDetails.map(contact => {
      if (contact.id === id) {
        contact.value = event.target.value;
      }
      return contact;
    });
    setContactDetails(newContactDetails);
  };

  return (
    <div>
      <select value={type} onChange={event => setType(event.target.value)}>
        <option value="emergency">emergency</option>
        <option value="secondary">secondary</option>
        <option value="residence">residence</option>
      </select>
      <form onSubmit={handleSubmit}>
        {contactDetails.map(contact => {
          return (
            <div key={contact.id}>
              <label>{contact.label}</label> <br />
              <input
                type="number"
                onChange={event => handleChange(contact.id, event)}
              />{" "}
              <br />
            </div>
          );
        })}
        {/* <input type="submit" /> <br /> */}
        <button onClick={addField}>Add Field</button>
      </form>
    </div>
  );
}

export default Contact;
