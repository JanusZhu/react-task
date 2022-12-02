import { useState, useRef } from "react";
export default function Task({ task, handleDelete, handleResubmit }) {
  const [editMode, setEditMode] = useState(false);
  const newName = useRef(null);
  return (
    <li>
      <label hidden={editMode}>{task.text}</label>
      <input defaultValue={task.text} ref={newName} hidden={!editMode}></input>
      <button
        hidden={editMode}
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        Edit
      </button>
      <button
        hidden={!editMode}
        onClick={() => {
          if (newName.current.value === "") return;
          handleResubmit(task.id, newName.current.value);
          setEditMode(!editMode);
        }}
      >
        ReSubmit
      </button>
      <button
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
