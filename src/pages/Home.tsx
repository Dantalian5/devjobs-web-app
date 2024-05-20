import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Filter from '@/components/forms/Filter';
import JobsView from '@/components/common/JobsView';

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Filter />
      <main className='l-jobs'>
        <JobsView />
      </main>
    </div>
  );
};

export default Home;
