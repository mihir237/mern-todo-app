import React, { useState } from "react";

const NoteList = ({ notes, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        {notes &&
          notes.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td className="btn-group">
                <button
                  className="btn m-2 px-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>

                <button
                  className="btn  m-2 px-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default NoteList;
