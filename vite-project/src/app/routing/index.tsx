import React  from 'react'
import { UNIVERSITIES_ROUTE, USERS_ROUTE } from './config';
import University from '../../pages/university';
import Users from '../../pages/users';
import { useRoutes } from 'react-router-dom';


const MainRouter = () => {
    return useRoutes([
          { path: USERS_ROUTE, element: <Users />,},
          { path: UNIVERSITIES_ROUTE, element: <University /> },
        ]);
  }

export default MainRouter;