import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Filter from '@/components/forms/Filter';
import Jobs from '@/components/Jobs';

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <Jobs />
        </QueryClientProvider>
      </main>
    </div>
  );
};

export default Home;
