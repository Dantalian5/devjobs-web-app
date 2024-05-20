import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Jobs from '@/components/Jobs';
import Filter from '@/components/forms/Filter';

const queryClient = new QueryClient();

const Home = () => {
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
