import React, { useState } from "react";

const BooklistForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [auther, setAuther] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeAuther = (e) => {
    setAuther(e.target.value);
  };
  const handleAdd = () => {
    if (name || description || auther) {
      props.addBook(name, description, auther);
    }
    setName("");
    setDescription("");
    setAuther("");
  };

  return (
    <div id="addbookform">
      <h1> Library </h1>
      <h3>Create new book</h3>
      <form>
        <input
          placeholder="Enter BookName"
          value={name}
          onChange={handleChangeName}
        />
        <input
          placeholder="Enter Descrption"
          value={description}
          onChange={handleChangeDescription}
        />
        <input
          placeholder="Enter Auther"
          value={auther}
          onChange={handleChangeAuther}
        />
        <label onClick={handleAdd}>Add book</label>
      </form>
    </div>
  );
};

export default BooklistForm;
