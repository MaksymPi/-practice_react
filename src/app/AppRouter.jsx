import { useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants/Routes';


// import Header from '../components/Header/Header';
// import TabsSection from '../components/TabsSection/TabsSection';
import CategorySection from '../components/CategorySection/CategorySection'
import FeedbackSection from '../components/FeedbackSection/FeedbackSection';
import NamesOfHeroes from '../components/NamesOfHeroes/NamesOfHeroes';
import AppLayout from './AppLayout/AppLayout';


const AppRouter = () => {

  const routes = useRoutes([
    {
      path: ROUTES.undefined,
      element: <div>Page not found</div>,
    },
    {
      path: ROUTES.main,
      element: <AppLayout/>,
    },
    {
      path: ROUTES.category,
      element: (
        <>
          <AppLayout/>
          <CategorySection/>
        </>
      ),
    },
    {
        path: ROUTES.feedback,
        element: (
          <>
          <AppLayout/>
            <FeedbackSection />
          </>
        ),
      },
      {
        path: ROUTES.names,
        element: (
          <>
          <AppLayout/>
            <NamesOfHeroes />
          </>
        ),
      },
  ]);

  return routes;
};

export default AppRouter;