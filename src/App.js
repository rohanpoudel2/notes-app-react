import Noteslist from './components/noteslist/Noteslist';
import Search from './components/search/Search';

import './app.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {

  let initialvalue;

  if (JSON.parse(localStorage.getItem('notes-data')) == null) {
    initialvalue = [];
  }
  else {
    initialvalue = JSON.parse(localStorage.getItem('notes-data'));
  }

  const [notesdata, setnotesdata] = useState(initialvalue);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notesdata));
  }, [notesdata]);

  const adddata = (data) => {

    const date = new Date();

    const newdata = {
      id: nanoid(),
      text: data,
      date: date.toLocaleDateString()
    }

    const newData = [...notesdata, newdata];

    setnotesdata(newData);
  }

  const handledelete = (id) => {
    setnotesdata(notesdata.filter((note) => note.id != id));
  }

  const [search, setSearch] = useState('');

  const searchnotes = (text) => {
    setSearch(text);
  }


  return (
    <div className="wrapper">
      <Search search={searchnotes} />
      <Noteslist notesdata={notesdata.filter((e) => e.text.includes(search))} adddata={adddata} deletedata={handledelete} />
    </div>
  )
}

export default App