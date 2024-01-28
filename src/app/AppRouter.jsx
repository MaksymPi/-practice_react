import { useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants/Routes';


import CategorySection from '../components/CategorySection/CategorySection'
import FeedbackSection from '../components/FeedbackSection/FeedbackSection';
import NamesOfHeroes from '../components/NamesOfHeroes/NamesOfHeroes';
import Header from '../components/Header/Header';


const AppRouter = () => {

  const routes = useRoutes([
    { path: ROUTES.undefined, element: <div>Page not found</div> },
    { path: ROUTES.main, element: <Header/> },
    { path: ROUTES.category, element: <CategorySection/>},
    { path: ROUTES.feedback, element: <FeedbackSection />},
    { path: ROUTES.names, element: <NamesOfHeroes />},
  ]);

  return routes;
};

export default AppRouter;