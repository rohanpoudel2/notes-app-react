import './search.css';

import { FaSearch } from 'react-icons/fa';

const Search = ({ search }) => {

  const handlesearch = (e) => {
    search(e.target.value);
  }

  return (
    <div className="search-wrapper">
      <FaSearch className='icon' />
      <input type="search" onChange={handlesearch} placeholder='Search for notes...' />
    </div>
  )
}

export default Search