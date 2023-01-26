import React  from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { Template } from '../components/Template'
//Screens
import { ErrorPage } from '../screens/ErrorPage';
import { Home } from '../screens/Home';
import { Day } from '../screens/Day';
import { Tasks } from '../screens/Tasks';
import { Planner } from '../screens/Planner';
import { Setup } from '../screens/Setup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                errorElement: <ErrorPage/>,
                children: [
                    { index: true, element: <Home/> },
                    { path: '/day', element: <Day/> },
                    { path: '/tasks', element: <Tasks/> },
                    { path: '/planner', element: <Planner/> },
                    { path: '/setup', element: <Setup/> }                    
                ],
            }
        ],
    }
    ]);

const RouterApp = () => {
    return(
        <RouterProvider router={router}/>
    )
};
export default RouterApp;
