import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';



const todos = [
  {
    text: 'Cortar cebolla', completed: false
  },
  {
    text: 'Tomar el té', completed: true
  },
  {
    text: 'Lavar platos', completed: false
  }
]

function App(
) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {
          todos.map(todo => (
            <TodoItem />
          ))
        }
      </TodoList>

      <CreateTodoButtom />
    </React.Fragment>
  );
}
export default App;
