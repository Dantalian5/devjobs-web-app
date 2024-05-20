import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Info from '@/pages/Info';

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jobs/:id' element={<Info />} />s
      <Route path='*' element={<h1>This page does not exist</h1>}></Route>
    </Routes>
  );
}

export default PublicRoutes;
