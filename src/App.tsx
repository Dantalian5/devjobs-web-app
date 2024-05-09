import { BrowserRouter } from 'react-router-dom';
import { useColorSchemeStore } from '@/store/colorScheme.store';
import Header from '@/components/Header';
import Jobs from '@/components/Jobs';

function App() {
  const { colorScheme } = useColorSchemeStore();
  return (
    <div className={`main-container theme-${colorScheme}`}>
      <BrowserRouter basename='/'>
        <Header />
        <Jobs />
      </BrowserRouter>
    </div>
  );
}

export default App;
