import React, { useState } from 'react';
import { NavComp } from './Components/Navbar/nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Habits } from './Pages/habits';
import { Home } from './Pages/home';

function App() {

  const [newHabit, setNewHabit] = useState(false);

  const toggle = () => {
    setNewHabit(!newHabit);
  }

  const routes = createBrowserRouter([{
    path: '/', element: <NavComp />, children: [
      {
        index: true, element: <Home
          newHabit={newHabit}
          toggle={toggle}
        />
      },

      {
        path: 'habits', element: <Habits
          newHabit={newHabit}
          toggle={toggle}
        />,
        children: [
          { path: 'weekly', element: <h1>Weekly Basis</h1> },
          { path: 'monthly', element: <h1>Monthly Basis</h1> },
        ]
      },
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
