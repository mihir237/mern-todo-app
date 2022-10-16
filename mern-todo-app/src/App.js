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

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="floatingInput">Text 1</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder=""
          value={values.title}
          name="title" //Important
          onChange={handleInputChange}
        />
        <label htmlFor="floatingPassword">Text 2</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder=""
          value={values.desc}
          name="desc" // Important
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!values.title.length > 0}>Submit</button>
      </form>
      <div>
        <NoteList notes={notes} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
