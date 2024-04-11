import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Habits } from './Pages/habits';
import { Home } from './Pages/home';
import { NavComp } from './Components/Navbar/nav';
import WeekTracker from './Components/Habits/week';
import { habitActions } from './app/reducers/habitReducer';
import { useDispatch } from "react-redux";


function App() {

  const date = new Date();
  const getday = date.getDay();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(habitActions.setDay({ getday }));
    dispatch(habitActions.setToday({ getday }));
  }, [dispatch, getday]);

  // creating routes
  const routes = createBrowserRouter([{
    path: '/', element: <NavComp />, children: [
      {
        index: true, element: <Home />
      },

      {
        path: 'habits', element: <Habits />,
        children: [
          { path: 'weekly/:id', element: <WeekTracker /> },
          { path: 'monthly', element: <h1>Monthly Basis</h1> },
        ]
      },
    ]
  }

  ])

  return (
    <div className="App">
      {/* fetching the router provider */}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
