import Notes from "../notes/Notes"
import Addnotes from "../addnotes/Addnotes";

import { nanoid } from 'nanoid';

import './noteslist.css';

const Noteslist = ({ notesdata, adddata, deletedata }) => {
  return (
    <div className="noteslist">
      {notesdata.map((notes) => <Notes key={nanoid()} id={notes.id} text={notes.text} date={notes.date} deletedata={deletedata} />)}
      <Addnotes adddata={adddata} />
    </div>
  )
}

export default Noteslist