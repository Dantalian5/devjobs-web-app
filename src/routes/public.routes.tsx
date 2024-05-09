import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Info from '@/pages/Info';

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/job/:id' element={<Info />} />

      <Route path='*' element={<h1>This page does not exist</h1>}></Route>
    </Routes>
  );
}

export default PublicRoutes;
