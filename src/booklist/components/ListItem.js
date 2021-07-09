import React, { useState } from "react";

const ListItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedAuther, setEditedAuther] = useState("");

  const resetEditingState = () => {
    setIsEditing(false);
    setEditedName("");
    setEditedDescription("");
    setEditedAuther("");
  };

  const handleChangeName = (e) => {
    setEditedName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setEditedDescription(e.target.value);
  };
  const handleChangeAuther = (e) => {
    setEditedAuther(e.target.value);
  };
  const handleEditBtnClick = () => {
    setIsEditing(true);
    setEditedName(props.items.name);
    setEditedDescription(props.items.description);
    setEditedAuther(props.items.auther);
  };

  const handleCancelClick = () => {
    resetEditingState();
  };

  const handleDeleteBtnClick = () => {
    props.delBook(props.items.id);
  };

  const handleSaveBtnClick = () => {
    props.editBook(props.items.id, editedName, editedDescription, editedAuther);
    resetEditingState();
  };

  return (
    <div>
      {isEditing ? (
        <>
          <table border="1">
            <tbody>
              <tr>
                <th>BOOKNAME </th>
                <th>DESCRIPTION </th>
                <th>AUTHER </th>
                <th>Save/Cancel</th>
              </tr>

              <td>
                <input value={editedName} onChange={handleChangeName} />
              </td>
              <td>
                <input
                  value={editedDescription}
                  onChange={handleChangeDescription}
                />
              </td>
              <td>
                <input value={editedAuther} onChange={handleChangeAuther} />
              </td>
              <td>
                <button onClick={handleSaveBtnClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </td>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table border="1">
            <tbody>
              <tr>
                <th>BOOKNAME </th>
                <th>DESCRIPTION </th>
                <th>AUTHER </th>
                <th>DEL/EDIT</th>
              </tr>

              <tr>
                <td> {props.items.name}</td>
                <td> {props.items.description}</td>
                <td> {props.items.auther}</td>

                <td>
                  <button onClick={handleDeleteBtnClick}>Delete</button>
                  <button onClick={handleEditBtnClick}>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ListItem;
