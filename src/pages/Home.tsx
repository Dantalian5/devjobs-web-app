import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/components/layout/Header';
import Filter from '@/components/forms/Filter';
import JobsView from '@/components/common/JobsView';
import Error404 from '@/components/error/Error404';

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Filter />
      <ErrorBoundary fallback={<Error404 />}>
        <main className='l-jobs'>
          <JobsView />
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
