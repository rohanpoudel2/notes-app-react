import Notes from "../notes/Notes"
import Addnotes from "../addnotes/Addnotes";

import './noteslist.css';

const Noteslist = ({ notesdata, adddata, deletedata }) => {
  return (
    <div className="noteslist">
      {notesdata.map((notes) => <Notes id={notes.id} text={notes.text} date={notes.date} deletedata={deletedata} />)}
      <Addnotes adddata={adddata} />
    </div>
  )
}

export default Noteslist