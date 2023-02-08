import { useContext } from 'react';
import { TodoContext } from '../TodoContext'
import './TodoSearch.css';

//Cualquier archivo que llame a TodoSearch debera pasar las propiedades de searvalue y setsearchvalue
function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
  ];
}

export { TodoSearch };