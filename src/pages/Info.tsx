import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/components/layout/Header';
import InfoView from '@/components/common/InfoView';
import Error404 from '@/components/error/Error404';

const Info = () => {
  return (
    <div>
      <Header />
      <ErrorBoundary fallback={<Error404 />}>
        <main className='l-jobs'>
          <InfoView />
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default Info;
