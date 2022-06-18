import { useState } from 'react';
import { FaSave } from 'react-icons/fa';

import './addnotes.css';

const Addnotes = ({ adddata }) => {

  const [newnote, setNewnote] = useState('');

  const characterlimit = 200;

  const handleremaining = (e) => {
    if (characterlimit - e.target.value.length < 0) {
      alert('Cannot Enter more than 200 word in a single note');
    } else {
      setNewnote(e.target.value);
    }
  }

  const handlesave = () => {
    if (newnote.trim().length > 0) {
      adddata(newnote);
      setNewnote('');
    } else {
      alert('Notes cannot be saved empty please enter something');
    }
  }

  return (
    <div className="addnotes">
      <div className="notes">
        <div className="notes-text">
          <textarea cols="35" rows="12" value={newnote} onChange={handleremaining}></textarea>
        </div>
        <div className="notes-footer">
          <div className="notes-footer-right">
            <span className='notes-date'>{200 - newnote.length} Words Remaining</span>
          </div>
          <div className="notes-footer-left">
            <button onClick={handlesave} className='notes-btn'><FaSave className='icon' />Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addnotes