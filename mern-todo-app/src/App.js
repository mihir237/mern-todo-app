import './App.css';
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import NoteList from './NoteList';

const initialValues = {
  title: "",
  desc: "",
}
function App() {
  // const [title, setTitle] = useState("")
  // const [desc, setDesc] = useState("")

  // const handleTitle = (e) => { }
  // const handleDesc = (e) => { }


  const [values, setValues] = useState(initialValues)
  const [notes, setNotes] = useState([]);
  const [update, setUpdate] = useState(false)

  const handleInputChange = (e) => {
    // console.log(e.target) // this return whole html input element 
    const { name, value } = e.target; // destructuring
    setValues({
      ...values,
      [name]: value,
      id: uuidv4()
    })
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault();
    notes.push(values)
    setValues(initialValues)
  }

  const handleDelete = (id) => {
    // const itemId = item.id
    const newNote = notes.filter((item) => {
      return id !== item.id;
    });
    setNotes(newNote);
  };

  const handleEdit = (item) => {
    console.log(item.title)
    setValues({ ...item })
    setUpdate(!update)
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const newNote = notes.map((item) => {
      return item.id === values.id ? values : item
    })
    setNotes(newNote);
    setValues(initialValues)
  }

  return (
    <div className="container w-50 ">
      <form onSubmit={!update ? handleSubmit : handleUpdate}>
        <h1>Todo </h1>
        <label htmlFor="floatingInput">Title</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder=""
          value={values.title}
          name="title" //Important
          onChange={handleInputChange}
        />
        <label htmlFor="floatingPassword">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder=""
          value={values.desc}
          name="desc" // Important
          onChange={handleInputChange}
        />
        <button className="btn btn-success mt-4" type="submit" disabled={!values.title.length > 0}>{!update ? "Add" : "Update"}</button>
      </form>
      <div>
        <NoteList notes={notes} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
