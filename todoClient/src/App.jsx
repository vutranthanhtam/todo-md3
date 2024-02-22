import React, { useEffect } from 'react';
import Home from './pages/Home';

import todoApi from './apis/todo.api';
import { useDispatch } from 'react-redux';
import { todoAction } from './store/slices/todo.slice';

export default function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

