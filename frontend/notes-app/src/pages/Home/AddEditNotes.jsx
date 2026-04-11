import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from "react-icons/md"

const AddEditNotes = ({ noteData, type, onClose }) => {
  // these are the states for the note data. When user types in the input box, the value of the input box will be stored in these states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null)

  // Add Note
  const addNewNote = async () => { }

  // Edit Note
  const editNote = async () => { } // what is async? It is a keyword that is used to declare a function as asynchronous.
  // It allows you to use the await keyword inside the function, which makes the function wait 
  // for a promise to resolve before moving on to the next line of code.

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    if (type === 'edit') {
      editNote()
    }
    else {
      addNewNote()
    }
  }
  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}>
        <MdClose className="text-xl text-slate-400" />
      </button>


      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go to Gym at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      {/* Tags Input, which has a box that allows user to type in the tag box and add to the note */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea // textarea tag allows user to type in multiple lines of text, unlike input tag which is for single line text
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium my-5 p-3"
        onClick={handleAddNote}>
        ADD
      </button>

    </div>
  )
}

export default AddEditNotes

/* Use State Usage
- It is a hook that allows you to add state to your functional components.
*/