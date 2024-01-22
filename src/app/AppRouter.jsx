import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from '../components/Header/Header';
import TabsSection from '../components/TabsSection/TabsSection';
import { ROUTES } from '../constants/Routes';

const AppRouter = () => {
  const headerAndTabs = (
    <>
      <Header />
      <TabsSection />
    </>
  );

  const routes = useRoutes([
    {
      path: ROUTES.main,
      element: headerAndTabs,
    },
    {
      path: ROUTES.home,
      element: (
        <>
          {headerAndTabs}
          home
        </>
      ),
    },
    {
        path: ROUTES.feedback,
        element: (
          <>
            {headerAndTabs}
            feedback
          </>
        ),
      },
      {
        path: ROUTES.effect,
        element: (
          <>
            {headerAndTabs}
            effect
          </>
        ),
      },
  ]);

  return routes;
};

export default AppRouter;