import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Header from '../components/Header/Header'

const AppRouter = () => {
    const routes = useRoutes( [
        {
            path: '/',
            element: <Header/>
        },
        {
            path: '/test',
            element: <div>test</div>
        },
    ]);

  return routes
}

export default AppRouter