import { BrowserRouter } from 'react-router-dom';
import { useColorSchemeStore } from '@/store/colorScheme.store';
import Header from '@/components/Header';
import Jobs from '@/components/Jobs';

function App() {
  const { colorScheme, toggleColorScheme } = useColorSchemeStore();
  return (
    <div className={`main-container theme-${colorScheme}`}>
      <BrowserRouter basename='/'>
        <Header colorScheme={colorScheme} colorSchemeFn={toggleColorScheme} />
        <Jobs />
      </BrowserRouter>
    </div>
  );
}

export default App;
