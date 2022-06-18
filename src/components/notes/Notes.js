import { FaTrash, FaPen } from 'react-icons/fa';

import './notes.css';

const notes = ({ id, text, date, deletedata }) => {
  return (
    <div className="notes">
      <div className="notes-text">
        <p>{text}</p>
      </div>
      <div className="notes-footer">
        <div className="notes-footer-right">
          <span className='notes-date'>{date}</span>
        </div>
        <div className="notes-footer-left">
          <button className='notes-btn' onClick={() => deletedata(id)}><FaTrash className='icon' /></button>
        </div>
      </div>
    </div>
  )
}

export default notes