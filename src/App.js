import React from 'react';
// import './App.css';

function App(
) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}
export default App;
