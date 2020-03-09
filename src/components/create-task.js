import React, { useState } from "react";

function CreateTask() {
  const handleKeyPress = e => {
    if (e.which === 13) {
      e.preventDefault();
      console.log(e.target.textContent);
    }
  };
  return (
    <li
      className="list-group-item"
      onKeyPress={handleKeyPress}
      contentEditable
      suppressContentEditableWarning={true}
    >
      New task...
    </li>
  );
}

export default CreateTask;
