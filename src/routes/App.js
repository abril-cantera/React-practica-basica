import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { NewTodoPage } from './new/NewTodoPage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewTodoPage />} />
        <Route path='/edit/:id' element={<EditTodoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;