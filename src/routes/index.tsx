import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from '@/routes/public.routes';

const AppRoutes = () => (
  <Router basename='/'>
    <>
      <PublicRoutes />
    </>
  </Router>
);

export default AppRoutes;
