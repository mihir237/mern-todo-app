import React, { useState } from "react";

const NoteList = ({ notes,handleDelete }) => {

  return (
    <div>
      <ul>
        {notes && notes.map((item) => (
          <li key={item.id}>
            {item.title}:{item.desc}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
