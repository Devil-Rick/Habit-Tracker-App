import React from 'react';
import { NavComp } from './Components/Navbar/nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Habits } from './Components/Habits/habits';
import { Home } from './Components/Home/home';

function App() {

  const routes = createBrowserRouter([{
    path: '/', element: <NavComp />, children: [
      { index: true, element: <Home /> },
      { path: 'habits', element: <Habits /> },
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
